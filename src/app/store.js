import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import mealReducer from '../features/mealSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    meal: mealReducer,
  },
});
