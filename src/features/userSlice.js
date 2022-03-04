import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  writeUserDataFirebase,
  dbRef,
  writeActiveMealPlanValue,
} from '../firebase';
import { get, child } from 'firebase/database';

export const addUserDataFirebase = createAsyncThunk(
  'user/addUserDataFirebase',
  async payload => {
    writeUserDataFirebase(payload.userData, payload.currentUserId);
  }
);

export const saveActiveMealPlanValue = createAsyncThunk(
  'user/saveActiveMealPlanValue',
  async payload => {
    writeActiveMealPlanValue(
      payload.activeMealPlanValue,
      payload.currentUserId
    );
  }
);

export const getActiveMealPlanValue = createAsyncThunk(
  'user/getActiveMealPlanValue',
  async payload => {
    const resp = await get(child(dbRef, `users/${payload}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          const { activeMealPlan } = snapshot.val();
          return activeMealPlan;
        }
      })
      .catch(err => {
        console.log(err);
      });

    return resp;
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
      console.log('Unable to add user data to database');
      alert('Something went wrong');
    },
    [getUserDataFirebase.fulfilled]: (state, action) => {
      state.userData = { ...action.payload };
    },
    [getUserDataFirebase.rejected]: () => {
      console.log('Unable to retrieve userStats data from database');
    },
    [getActiveMealPlanValue.fulfilled]: (state, action) => {
      state.userData = {
        ...state.userData,
        activeMealPlanValue: action.payload,
      };
    },
    [getActiveMealPlanValue.rejected]: () => {
      console.log('Unable to retrieve active meal tab value from database');
    },
  },
});

export const { addUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;
