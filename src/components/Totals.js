import _ from 'lodash';
import React, { useEffect } from 'react';
import { useState } from 'react';

const styleHeading = {
  // border: '1px solid #DDDDDD',
  textAlign: 'right',
  padding: '8px',
  fontWeight: 'bold',
};

const styleNumbers = {
  backgroundColor: '#e7e5e4',
  textAlign: 'right',
  padding: '8px',
};

const styleNumbersDelta = {
  color: 'rgb(211, 47, 47)',
  backgroundColor: '#e7e5e4',
  textAlign: 'right',
  padding: '8px',
  fontWeight: 'bold',
};

const styleInput = {
  fontFamily: 'Inter',
  padding: '0.6rem',
  width: '100%',
  border: '1px solid #DDDDDD',
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
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });

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
    // Get the total calories, etc...
    /* 
      
      
    */
  }, [total]);

  return (
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
              width: '24.5rem',
              textAlign: 'right',
            }}
          >
            TOTALS
          </th>
          <th style={{ ...styleNumbers, width: '8.1rem' }}>{total.calories}</th>
          <th style={{ ...styleNumbers, width: '10.1rem' }}>{total.protein}</th>
          <th style={{ ...styleNumbers, width: '9rem' }}>{total.carbs}</th>
          <th style={{ ...styleNumbers, width: '7.8rem' }}>{total.fats}</th>
          <th style={{ ...styleNumbers, width: '6.4rem' }}></th>
        </tr>
      </thead>
      <tbody>
        <tr style={{}}>
          <td style={styleHeading}>+/-</td>
          <td style={styleNumbersDelta}>-2</td>
          <td style={styleNumbersDelta}>-2</td>
          <td style={styleNumbersDelta}>-2</td>
          <td style={styleNumbersDelta}>-2</td>
          <td style={styleNumbersDelta}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Totals;
