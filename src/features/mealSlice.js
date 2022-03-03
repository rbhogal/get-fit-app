import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { writeMealPlansFirebase, dbRef } from '../firebase';
import { get, child } from 'firebase/database';

export const addMealPlansFirebase = createAsyncThunk(
  'meal/addMealPlansFirebase',
  async payload => {
    writeMealPlansFirebase(payload.mealPlans, payload.currentUserId);
  }
);

export const getMealPlansFirebase = createAsyncThunk(
  'meal/getMealPlansFirebase',
  async payload => {
    const resp = await get(child(dbRef, `mealPlans/${payload}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          const mealPlans = snapshot.val();
          return mealPlans;
        } else {
          // User stats don't exist in database
          return [
            {
              breakfastRows: [],
              lunchRows: [],
              dinnerRows: [],
              snacksRows: [],
              tabName: 'Meal Plan 1',
            },
          ];
        }
      })
      .catch(err => {
        console.log(err);
      });

    return resp;
  }
);

const initMealPlans = [
  {
    breakfastRows: [],
    lunchRows: [],
    dinnerRows: [],
    snacksRows: [],
    tabName: 'Meal Plan 1',
  },
];

export const mealSlice = createSlice({
  name: 'meal',
  initialState: {
    mealPlans: initMealPlans,
    isLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getMealPlansFirebase.fulfilled]: (state, action) => {
      state.mealPlans = [...action.payload];
      state.isLoading = false;
    },
    [getMealPlansFirebase.pending]: state => {
      state.isLoading = true;
    },
    [getMealPlansFirebase.rejected]: state => {
      console.log('Unable to retrieve meal plans from database');
      state.isLoading = false;
    },
  },
});

export default mealSlice.reducer;
