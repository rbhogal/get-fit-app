import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import SignIn from './pages/SignIn';
import Layout from './components/Layout';
import MealPlanner from './pages/MealPlanner';
import UserProfile from './pages/UserProfile';
import WeightLog from './pages/WeightLog';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f7f9fc',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightBlack: 900,
  },
  palette: {
    background: {},
  },
});

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route element={<Layout />}>
              <Route path="mealplanner" element={<MealPlanner />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="weightlog" element={<WeightLog />} />
            </Route>
          </Routes>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
