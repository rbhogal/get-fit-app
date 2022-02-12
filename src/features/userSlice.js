import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { writeUserDataFirebase, dbRef } from '../firebase';
import { get, child } from 'firebase/database';

export const addUserDataFirebase = createAsyncThunk(
  'user/addUserDataFirebase',
  async payload => {
    writeUserDataFirebase(payload.userData, payload.currentUserId);
  }
);

export const getUserDataFirebase = createAsyncThunk(
  'user/getUserDataFirebase',
  async payload => {
    const resp = await get(child(dbRef, `userStats/${payload}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          return userData;
        }
      })
      .catch(err => {
        console.log(err);
      });

    return resp;
  }
);

/* 
userData: {
      sex: '',
      age: '',
      heightFeet: '',
      heightInches: '',
      weightInLbs: '',
      goal: '',
      activityLevel: '',
      rateOfFatLossMuscleGain: '',
      poundsToLoseGainPerWeek: '',
      bmr: '',
      tdee: '',
      dailyCalories: '',
    }
*/

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
    isLoadingResults: false,
  },
  reducers: {
    addUserData: (state, action) => {
      state.userData = { ...action.payload };
    },
  },
  extraReducers: {
    [addUserDataFirebase.pending]: state => {
      state.isLoadingResults = true;
    },
    [addUserDataFirebase.fulfilled]: state => {
      state.isLoadingResults = false;
    },
    [addUserDataFirebase.rejected]: state => {
      state.isLoadingResults = false;
    },
    // [getUserDataFirebase.pending]: state => {

    // }
    [getUserDataFirebase.fulfilled]: (state, action) => {
      state.userData = { ...action.payload };
    },
    // [getUserDataFirebase.rejected]: state => {

    // }
  },
});

export const { addUserData } = userSlice.actions;

export default userSlice.reducer;
