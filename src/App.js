import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import SignIn from './pages/SignIn';
import Layout from './components/Layout';
import MealPlanner from './pages/MealPlanner';
import UserProfile from './pages/UserProfile';
import WeightLog from './pages/WeightLog';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightBlack: 900,
  },
});

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route element={<Layout />}>
            <Route path="mealplanner" element={<MealPlanner />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="weightlog" element={<WeightLog />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
