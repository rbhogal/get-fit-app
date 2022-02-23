import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { writeUserDataFirebase, dbRef } from '../firebase';
import { get, child } from 'firebase/database';

const initMealPlan = {
  breakfastRows: [],
  lunchRows: [],
  dinnerRows: [],
  snacksRows: [],
};

export const mealSlice = createSlice({
  name: 'meal',
  initialState: {
    mealPlan: initMealPlan,
  },
  reducers: {
    addMealPlan: (state, action) => {
      console.log(action.payload);
      state.mealPlan = action.payload;
    },
  },
  extraReducers: {},
});

export const { addMealPlan } = mealSlice.actions;

export default mealSlice.reducer;
