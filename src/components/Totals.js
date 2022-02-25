import _ from 'lodash';
import React, { useEffect } from 'react';
import { useState } from 'react';

const styleHeading = {
  // border: '1px solid #DDDDDD',
  textAlign: 'right',
  padding: '8px',
  fontWeight: 'bold',
};

const styleTotals = {
  backgroundColor: '#e7e5e4',
  textAlign: 'right',
  padding: '8px',
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
  const { breakfastRows, lunchRows, dinnerRows, snacksRows } = mealPlan;
  const [total, setTotal] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });
  const [totalDelta, setTotalDelta] = useState({
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });
  const [colorTotalsDelta, setColorTotalsDelta] = useState({
    calories: 'rgb(46, 125, 50)',
    protein: 'rgb(46, 125, 50)',
    carbs: 'rgb(46, 125, 50)',
    fats: 'rgb(46, 125, 50)',
  });

  // green - rgb(46, 125, 50)
  // red - rgb(211, 47, 47)

  const styleTotalsDelta = {
    backgroundColor: '#e7e5e4',
    textAlign: 'right',
    padding: '8px',
    fontWeight: 'bold',
  };

  useEffect(() => {
    // Calculate the totals row

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

    setTotal({
      ...total,
      calories: newTotalsAll.calories,
      protein: newTotalsAll.protein,
      carbs: newTotalsAll.carbs,
      fats: newTotalsAll.fats,
    });
  }, [mealPlan]);

  useEffect(() => {
    // Calculates the change in total calories, protein, carbs, fats

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

    caloriesDelta = 2000 - total.calories;
    proteinDelta = 170 - total.protein;
    carbsDelta = 200 - total.carbs;
    fatsDelta = 60 - total.fats;

    setTotalDelta({
      ...totalDelta,
      calories: caloriesDelta,
      protein: proteinDelta,
      carbs: carbsDelta,
      fats: fatsDelta,
    });

    /* 

    */

    setColorTotalsDelta({
      calories:
        caloriesDelta === 0
          ? ''
          : caloriesDelta > 0
          ? 'rgb(46, 125, 50)'
          : 'rgb(211, 47, 47)',
      protein:
        proteinDelta === 0
          ? ''
          : proteinDelta > 0
          ? 'rgb(46, 125, 50)'
          : 'rgb(211, 47, 47)',
      carbs:
        carbsDelta === 0
          ? ''
          : carbsDelta > 0
          ? 'rgb(46, 125, 50)'
          : 'rgb(211, 47, 47)',
      fats:
        fatsDelta === 0
          ? ''
          : fatsDelta > 0
          ? 'rgb(46, 125, 50)'
          : 'rgb(211, 47, 47)',
    });
  }, [total]);

  console.log(totalDelta.calories);

  return (
    <table
      style={{
        borderCollapse: 'collapse',
        width: '100%',
        marginBottom: '8rem',
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              ...styleHeading,
              width: '24.5rem',
              textAlign: 'right',
            }}
          >
            TOTALS
          </th>
          <th style={{ ...styleTotals, width: '8.1rem' }}>{total.calories}</th>
          <th style={{ ...styleTotals, width: '10.1rem' }}>{total.protein}</th>
          <th style={{ ...styleTotals, width: '9rem' }}>{total.carbs}</th>
          <th style={{ ...styleTotals, width: '7.8rem' }}>{total.fats}</th>
          <th style={{ ...styleTotals, width: '6.4rem' }}></th>
        </tr>
      </thead>
      <tbody>
        <tr style={{}}>
          <td style={styleHeading}>+/-</td>
          <td style={{ ...styleTotalsDelta, color: colorTotalsDelta.calories }}>
            {totalDelta.calories}
          </td>
          <td style={{ ...styleTotalsDelta, color: colorTotalsDelta.protein }}>
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
  );
};

export default Totals;
