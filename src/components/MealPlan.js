import React, { useState, useEffect, useRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import MealTable from './meal-table/MealTable';
import Totals from './Totals';
import { addMealPlansFirebase } from '../features/mealSlice';
import authContext from '../context/authContext';

const newMealPlan = {
  breakfastRows: [],
  lunchRows: [],
  dinnerRows: [],
  snacksRows: [],
};

const MealPlan = ({
  mealPlanIndex,
  mealPlans,
  setMealPlans,
  tabName,
  mealPlan,
}) => {
  const [addFormMealData, setAddFormMealData] = useState({
    mealName: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });
  // const [mealPlan, setMealPlan] = useState({
  //   ...newMealPlan,
  //   tabName: tabName,
  // });
  const [editMealId, setEditMealId] = useState(null);
  const [editFormMealData, setEditFormMealData] = useState({
    mealName: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  });
  const breakfastFormRef = useRef();
  const lunchFormRef = useRef();
  const dinnerFormRef = useRef();
  const snacksFormRef = useRef();
  const authCtx = useContext(authContext);
  const currentUserId = authCtx.currentUserId;

  const dispatch = useDispatch();

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

  const handleAddFormMealDataSubmit = (e, rows, formRef) => {
    console.log(mealPlan[rows]);

    e.preventDefault();

    const newMeal = {
      id: nanoid(),
      mealName: addFormMealData.mealName,
      calories: addFormMealData.calories,
      protein: addFormMealData.protein,
      carbs: addFormMealData.carbs,
      fats: addFormMealData.fats,
    };

    const newRows = !mealPlan[rows]
      ? [newMeal]
      : [...mealPlan[`${rows}`], newMeal];

    // const newRows = [...mealPlan[`${rows}`], newMeal];

    const newMealPlan = {
      ...mealPlan,
      [`${rows}`]: newRows,
    };

    // setMealPlan(newMealPlan);
    formRef.current.reset();

    const newMealPlans = [...mealPlans];
    newMealPlans[mealPlanIndex] = newMealPlan;

    console.log(newMealPlans);
    setMealPlans(newMealPlans);

    // Add to firebase
    dispatch(
      addMealPlansFirebase({
        mealPlans: newMealPlans,
        currentUserId: currentUserId,
      })
    );
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

    // setMealPlan({ ...mealPlan, [`${rows}`]: newRows });

    //------------------------

    const newMealPlan = { ...mealPlan, [`${rows}`]: newRows };

    const newMealPlans = [...mealPlans];

    newMealPlans[mealPlanIndex] = newMealPlan;

    setMealPlans(newMealPlans);
    setEditMealId(null);

    // Add to firebase
    dispatch(
      addMealPlansFirebase({
        mealPlans: newMealPlans,
        currentUserId: currentUserId,
      })
    );
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

    // setMealPlan({ ...mealPlan, [`${rows}`]: newRows });

    const newMealPlan = { ...mealPlan, [`${rows}`]: newRows };

    const newMealPlans = [...mealPlans];

    newMealPlans[mealPlanIndex] = newMealPlan;

    setMealPlans(newMealPlans);

    // Add to firebase
    dispatch(
      addMealPlansFirebase({
        mealPlans: newMealPlans,
        currentUserId: currentUserId,
      })
    );
  };

  return (
    <>
      <MealTable
        title={'Breakfast'}
        mealType={'breakfast'}
        rows={!mealPlan.breakfastRows ? [] : mealPlan.breakfastRows}
        rowsStringName="breakfastRows"
        handleAddFormMealChange={handleAddFormMealChange}
        handleAddFormMealDataSubmit={handleAddFormMealDataSubmit}
        editMealId={editMealId}
        handleEditClick={handleEditClick}
        editFormMealData={editFormMealData}
        handleEditFormMealChange={handleEditFormMealChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
        formRef={breakfastFormRef}
      />
      <MealTable
        title={'Lunch'}
        mealType={'lunch'}
        rows={!mealPlan.lunchRows ? [] : mealPlan.lunchRows}
        rowsStringName="lunchRows"
        handleAddFormMealChange={handleAddFormMealChange}
        handleAddFormMealDataSubmit={handleAddFormMealDataSubmit}
        editMealId={editMealId}
        handleEditClick={handleEditClick}
        editFormMealData={editFormMealData}
        handleEditFormMealChange={handleEditFormMealChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
        formRef={lunchFormRef}
      />
      <MealTable
        title={'Dinner'}
        mealType={'dinner'}
        rows={!mealPlan.dinnerRows ? [] : mealPlan.dinnerRows}
        rowsStringName="dinnerRows"
        handleAddFormMealChange={handleAddFormMealChange}
        handleAddFormMealDataSubmit={handleAddFormMealDataSubmit}
        editMealId={editMealId}
        handleEditClick={handleEditClick}
        editFormMealData={editFormMealData}
        handleEditFormMealChange={handleEditFormMealChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
        formRef={dinnerFormRef}
      />
      <MealTable
        title={'Snacks'}
        mealType={'snacks'}
        rowsStringName="snacksRows"
        rows={!mealPlan.snacksRows ? [] : mealPlan.snacksRows}
        handleAddFormMealChange={handleAddFormMealChange}
        handleAddFormMealDataSubmit={handleAddFormMealDataSubmit}
        editMealId={editMealId}
        handleEditClick={handleEditClick}
        editFormMealData={editFormMealData}
        handleEditFormMealChange={handleEditFormMealChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleDeleteClick={handleDeleteClick}
        formRef={snacksFormRef}
      />
      <Totals mealPlan={mealPlan} />
    </>
  );
};

export default MealPlan;
