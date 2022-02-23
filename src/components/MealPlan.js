import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import MealTable from './meal-table/MealTable';

const newMealPlan = {
  breakfastRows: [],
  lunchRows: [],
  dinnerRows: [],
  snacksRows: [],
};

const MealPlan = ({ mealPlanIndex, mealPlans, setMealPlans, tabName }) => {
  const [addFormMealData, setAddFormMealData] = useState({
    mealName: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });
  const [mealPlan, setMealPlan] = useState({
    ...newMealPlan,
    tabName: tabName,
  });
  const [editMealId, setEditMealId] = useState(null);
  const [editFormMealData, setEditFormMealData] = useState({
    mealName: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });
  console.log(editFormMealData);

  const handleAddFormMealChange = e => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormMealData = { ...addFormMealData };
    newFormMealData[fieldName] = fieldValue;

    setAddFormMealData(newFormMealData);
  };

  const handleEditFormMealChange = e => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormMealData };

    newFormData[fieldName] = fieldValue;

    setEditFormMealData(newFormData);
  };

  const handleAddFormMealDataSubmit = (e, rows) => {
    e.preventDefault();

    const newMeal = {
      id: nanoid(),
      mealName: addFormMealData.mealName,
      calories: addFormMealData.calories,
      protein: addFormMealData.protein,
      carbs: addFormMealData.carbs,
      fats: addFormMealData.fats,
    };

    const newRows = [...mealPlan[`${rows}`], newMeal];

    const newMealPlan = {
      ...mealPlan,
      [`${rows}`]: newRows,
    };

    setMealPlan(newMealPlan);
  };

  const handleEditFormSubmit = (e, rows) => {
    e.preventDefault();

    const editedMeal = {
      id: editMealId,
      mealName: editFormMealData.mealName,
      calories: editFormMealData.calories,
      protein: editFormMealData.protein,
      carbs: editFormMealData.carbs,
      fats: editFormMealData.fats,
    };

    const newRows = [...mealPlan[`${rows}`]];

    const index = mealPlan[`${rows}`].findIndex(meal => {
      return meal.id === editMealId;
    });

    newRows[index] = editedMeal;

    setMealPlan({ ...mealPlan, [`${rows}`]: newRows });
    setEditMealId(null);
  };

  const handleEditClick = (e, meal) => {
    e.preventDefault();
    setEditMealId(meal.id);

    const formValues = {
      mealName: meal.mealName,
      calories: meal.calories,
      protein: meal.protein,
      carbs: meal.carbs,
      fats: meal.fats,
    };

    setEditFormMealData(formValues);
  };

  const handleDeleteClick = (mealId, rows) => {
    const newRows = [...mealPlan[`${rows}`]];

    const index = mealPlan[`${rows}`].findIndex(meal => {
      return meal.id === mealId;
    });

    newRows.splice(index, 1);

    setMealPlan({ ...mealPlan, [`${rows}`]: newRows });
  };

  return (
    <>
      <MealTable
        title={'Breakfast'}
        mealType={'breakfast'}
        rows={mealPlan.breakfastRows}
        rowsStringName="breakfastRows"
        handleAddFormMealChange={handleAddFormMealChange}
        handleAddFormMealDataSubmit={handleAddFormMealDataSubmit}
        editMealId={editMealId}
        handleEditClick={handleEditClick}
        editFormMealData={editFormMealData}
        handleEditFormMealChange={handleEditFormMealChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
      />
      <MealTable
        title={'Lunch'}
        mealType={'lunch'}
        rows={mealPlan.lunchRows}
        rowsStringName="lunchRows"
        handleAddFormMealChange={handleAddFormMealChange}
        handleAddFormMealDataSubmit={handleAddFormMealDataSubmit}
        editMealId={editMealId}
        handleEditClick={handleEditClick}
        editFormMealData={editFormMealData}
        handleEditFormMealChange={handleEditFormMealChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
      />
      <MealTable
        title={'Dinner'}
        mealType={'dinner'}
        rows={mealPlan.dinnerRows}
        rowsStringName="dinnerRows"
        handleAddFormMealChange={handleAddFormMealChange}
        handleAddFormMealDataSubmit={handleAddFormMealDataSubmit}
        editMealId={editMealId}
        handleEditClick={handleEditClick}
        editFormMealData={editFormMealData}
        handleEditFormMealChange={handleEditFormMealChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
      />
      <MealTable
        title={'Snacks'}
        mealType={'snack'}
        rowsStringName="snacksRows"
        rows={mealPlan.snacksRows}
        handleAddFormMealChange={handleAddFormMealChange}
        handleAddFormMealDataSubmit={handleAddFormMealDataSubmit}
        editMealId={editMealId}
        handleEditClick={handleEditClick}
        editFormMealData={editFormMealData}
        handleEditFormMealChange={handleEditFormMealChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  );
};

export default MealPlan;
