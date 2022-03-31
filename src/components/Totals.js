import React, { useEffect, useContext } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Box } from '@mui/material';

import authContext from '../context/authContext';
import { getUserDataFirebase } from '../features/userSlice';

const styleHeading = {
  // border: '1px solid #DDDDDD',
  textAlign: 'right',
  padding: '8px',
  fontWeight: 'bold',
};

const styleTotals = {
  // border: '1px solid #DDDDDD',
  backgroundColor: '#e7e5e4',
  textAlign: 'right',
  padding: '8px',
};

const styleTotalsDelta = {
  // border: '1px solid #DDDDDD',
  backgroundColor: '#e7e5e4',
  textAlign: 'right',
  padding: '8px',
  // fontWeight: 'bold',
};

/**
 *  Calculates the total calories, protein, carbs, and fats for the inputted row of meals (breakfast, lunch, dinner, or snacks)
 * @param { Array<object>} rows - breakfastRows, lunchRows, dinnerRows, or snacksRows
 * @returns An object containing total (integers) calories, protein, carbs, and fats
 */

const calcTotals = rows => {
  const newTotal = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  };

  rows.forEach(meal => {
    newTotal.calories = newTotal.calories + +meal.calories;
    newTotal.protein = newTotal.protein + +meal.protein;
    newTotal.carbs = newTotal.carbs + +meal.carbs;
    newTotal.fats = newTotal.fats + +meal.fats;
  });

  return newTotal;
};

/**
 * Calculate the total (number) of calories, protein, carbs, and fats consumed in the whole day
 * @param {Object} totalBreakfast -Object containing the total (number) of calories, protein, carbs, and fats for breakfast meals
 * @param {Object} totalLunch  - Object containing the total (number) of calories, protein, carbs, and fats for lunch meals
 * @param {Object} totalDinner - Object containing the total (number) of calories, protein, carbs, and fats for dinner meals
 * @param {Object} totalSnacks - Object containing the total (number) of calories, protein, carbs, and fats for snacks meals
 * @returns An object containing the total (number) of calories, protein, carbs and fats for the whole day
 */

const calcTotalsAll = (
  totalBreakfast,
  totalLunch,
  totalDinner,
  totalSnacks
) => {
  let newTotalsAll = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  };

  newTotalsAll.calories =
    totalBreakfast.calories +
    totalLunch.calories +
    totalDinner.calories +
    totalSnacks.calories;

  newTotalsAll.protein =
    totalBreakfast.protein +
    totalLunch.protein +
    totalDinner.protein +
    totalSnacks.protein;

  newTotalsAll.carbs =
    totalBreakfast.carbs +
    totalLunch.carbs +
    totalDinner.carbs +
    totalSnacks.carbs;

  newTotalsAll.fats =
    totalBreakfast.fats + totalLunch.fats + totalDinner.fats + totalSnacks.fats;

  return newTotalsAll;
};

const Totals = ({ mealPlan }) => {
  const {
    breakfastRows = [],
    lunchRows = [],
    dinnerRows = [],
    snacksRows = [],
  } = mealPlan;
  const colorGreen = 'rgb(46, 125, 50)';
  const colorRed = 'rgb(211, 47, 47)';
  const colorGreyedOut = '#a8a29e';
  // const colorGreyedOut = 'rgb(231, 229, 228)';
  const authCtx = useContext(authContext);
  const currentUserId = authCtx.currentUserId;
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);

  useEffect(() => {
    // This is to persist the data
    if (!currentUserId) return;
    dispatch(getUserDataFirebase(currentUserId));
  }, [currentUserId, dispatch]);

  const [total, setTotal] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });
  const [totalDelta, setTotalDelta] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });
  const [colorTotalsDelta, setColorTotalsDelta] = useState({
    calories: colorGreyedOut,
    protein: colorGreyedOut,
    carbs: colorGreyedOut,
    fats: colorGreyedOut,
  });

  useEffect(() => {
    // Calculates the totals row

    let totalBreakfast = calcTotals(breakfastRows);
    let totalLunch = calcTotals(lunchRows);
    let totalDinner = calcTotals(dinnerRows);
    let totalSnacks = calcTotals(snacksRows);

    let newTotalsAll = calcTotalsAll(
      totalBreakfast,
      totalLunch,
      totalDinner,
      totalSnacks
    );

    setTotal(total => ({
      ...total,
      calories: newTotalsAll.calories,
      protein: newTotalsAll.protein,
      carbs: newTotalsAll.carbs,
      fats: newTotalsAll.fats,
    }));
  }, [mealPlan]);

  useEffect(() => {
    // Calculates the +/- total calories, protein, carbs, fats needed to reach calorie goals and macros

    if (!userData.dailyCalories) return;

    let newTotalDelta = {
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    };

    let {
      calories: caloriesDelta,
      protein: proteinDelta,
      carbs: carbsDelta,
      fats: fatsDelta,
    } = newTotalDelta;

    caloriesDelta = userData.dailyCalories - total.calories;
    proteinDelta = userData.proteinGrams - total.protein;
    carbsDelta = userData.carbsGrams - total.carbs;
    fatsDelta = userData.fatsGrams - total.fats;

    setTotalDelta(totalDelta => ({
      ...totalDelta,
      calories: caloriesDelta,
      protein: proteinDelta,
      carbs: carbsDelta,
      fats: fatsDelta,
    }));

    setColorTotalsDelta({
      calories:
        caloriesDelta === 0
          ? colorGreyedOut
          : caloriesDelta > 0
          ? colorGreen
          : colorRed,
      protein:
        proteinDelta === 0
          ? colorGreyedOut
          : proteinDelta > 0
          ? colorGreen
          : colorRed,
      carbs:
        carbsDelta === 0
          ? colorGreyedOut
          : carbsDelta > 0
          ? colorGreen
          : colorRed,
      fats:
        fatsDelta === 0
          ? colorGreyedOut
          : fatsDelta > 0
          ? colorGreen
          : colorRed,
    });
  }, [total, userData]);

  return (
    <Box
      sx={{
        padding: { xs: '2rem 0 0 0', md: '0.5rem' },
        //  overflowX: 'auto'
      }}
    >
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                ...styleHeading,
                width: '100%',
                textAlign: 'right',
              }}
            >
              TOTALS
            </th>
            <th style={{ ...styleTotals, minWidth: '8rem' }}>
              {total.calories}
            </th>
            <th style={{ ...styleTotals, minWidth: '8rem' }}>
              {total.protein}
            </th>
            <th style={{ ...styleTotals, minWidth: '8rem' }}>{total.carbs}</th>
            <th style={{ ...styleTotals, minWidth: '8rem' }}>{total.fats}</th>
            <th style={{ ...styleTotals, minWidth: '5.2rem' }}></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{}}>
            <td style={styleHeading}>+/-</td>
            <td
              style={{ ...styleTotalsDelta, color: colorTotalsDelta.calories }}
            >
              {totalDelta.calories}
            </td>
            <td
              style={{ ...styleTotalsDelta, color: colorTotalsDelta.protein }}
            >
              {totalDelta.protein}
            </td>
            <td style={{ ...styleTotalsDelta, color: colorTotalsDelta.carbs }}>
              {totalDelta.carbs}
            </td>
            <td style={{ ...styleTotalsDelta, color: colorTotalsDelta.fats }}>
              {totalDelta.fats}
            </td>
            <td style={styleTotalsDelta}></td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default Totals;
