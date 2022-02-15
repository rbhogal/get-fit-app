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
        } else {
          // User stats don't exist in database
          return {
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
            proteinGrams: '',
            carbsGrams: '',
            fatsGrams: '',
            percentProtein: '',
            percentCarbs: '',
            percentFats: '',
            userStatsExist: false,
          };
        }
      })
      .catch(err => {
        console.log(err);
      });

    return resp;
  }
);

const initUserData = {
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
  proteinGrams: '',
  carbsGrams: '',
  fatsGrams: '',
  percentProtein: '',
  percentCarbs: '',
  percentFats: '',
  userStatsExist: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: initUserData,
    isLoadingResults: false,
  },
  reducers: {
    addUserData: (state, action) => {
      state.userData = { ...action.payload };
    },
    resetUserData: state => {
      state.userData = { ...initUserData };
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
      console.log('Unable to add user');
    },
    [getUserDataFirebase.fulfilled]: (state, action) => {
      state.userData = { ...action.payload };
    },
    [getUserDataFirebase.rejected]: () => {
      console.log('Unable to retrieve userStats data from database');
    },
  },
});

export const { addUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;
