import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import SignIn from './pages/SignIn';
import Layout from './components/Layout';
import MealPlanner from './pages/MealPlanner';
import UserProfile from './pages/UserProfile';
import Profile from './pages/Profile';
import WeightLog from './pages/WeightLog';
import AuthContext from './context/AuthContext';

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
  const authCtx = useContext(AuthContext);
  const isSignedIn = authCtx.isSignedIn;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div>
          <Routes>
            {!isSignedIn && <Route path="/" element={<SignIn />} />}
            {!isSignedIn && <Route path="*" element={<SignIn />} />}

            {isSignedIn && (
              <Route element={<Layout />}>
                <Route path="/" element={<MealPlanner />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="weightlog" element={<WeightLog />} />
              </Route>
            )}
          </Routes>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
