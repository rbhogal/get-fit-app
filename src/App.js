import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import SignIn from './pages/SignIn';
import Layout from './components/Layout';
import MealPlanner from './pages/MealPlanner';
import Profile from './pages/Profile';
import WeightLog from './pages/WeightLog';
// import Settings from './pages/Settings';
import AuthContext from './context/authContext';

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
  palette: {},
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
                <Route path="profile" element={<Profile />} />
                <Route path="weightlog" element={<WeightLog />} />
                {/* <Route path="settings" element={<Settings />} /> */}
              </Route>
            )}
          </Routes>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
