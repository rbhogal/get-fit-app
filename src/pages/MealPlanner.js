import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import MealPlan from '../components/MealPlan';
import PageHeader from '../components/PageHeader';
import DeleteMealDialog from '../components/DeleteMealDialog';
import WelcomeDialog from '../components/WelcomeDialog';
import {
  addMealPlansFirebase,
  getMealPlansFirebase,
} from '../features/mealSlice';
import { useContext } from 'react';
import authContext from '../context/authContext';
import {
  getActiveMealPlanValue,
  saveActiveMealPlanValue,
} from '../features/userSlice';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box p={3}>{children}</Box>
        </Container>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const newMealPlan = {
  breakfastRows: [],
  lunchRows: [],
  dinnerRows: [],
  snacksRows: [],
  tabName: 'Meal Plan 1',
};

export default function MealPlanner() {
  const [value, setValue] = useState(0);
  const [openDeletePlanDialog, setOpenDeletePlanDialog] = useState(false);
  const dispatch = useDispatch();
  const authCtx = useContext(authContext);
  const currentUserId = authCtx.currentUserId;
  const { mealPlans: mealPlansFirebase } = useSelector(state => state.meal);
  const { userData } = useSelector(state => state.user);
  const openWelcome = authCtx.openWelcome;
  const openWelcomeHandler = authCtx.openWelcomeHandler;
  const [mealPlans, setMealPlans] = useState(mealPlansFirebase);
  // const [showWelcome, setShowWelcome] = useState(true);
  const isGuest = localStorage.getItem('isGuest');

  useEffect(() => {
    // To persist the data
    if (!currentUserId) return;
    dispatch(getMealPlansFirebase(currentUserId));
  }, [currentUserId, dispatch]);

  useEffect(() => {
    setMealPlans(mealPlansFirebase);
  }, [mealPlansFirebase]);

  useEffect(() => {
    if (!currentUserId) return;
    dispatch(getActiveMealPlanValue(currentUserId));
  }, [currentUserId, dispatch]);

  useEffect(() => {
    if (!userData.activeMealPlanValue) return;
    const newValue = userData.activeMealPlanValue;
    setValue(newValue);
  }, [userData.activeMealPlanValue]);

  const handleOpenDeletePlanDialog = () => {
    setOpenDeletePlanDialog(true);
  };

  const handleCloseDeletePlanDialog = e => {
    setOpenDeletePlanDialog(false);
  };

  const handleCloseWelcome = () => {
    openWelcomeHandler('false');
  };

  // const handleCheckbox = (e, value) => {
  //   setShowWelcome(!value);
  // };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);

    dispatch(
      saveActiveMealPlanValue({
        activeMealPlanValue: newValue,
        currentUserId: currentUserId,
      })
    );
  };

  const addNewMealPlan = () => {
    // Handle naming the new tab if duplicate name(s) exist
    let duplicateNum = 0;
    mealPlans.forEach(mealPlan => {
      const strIndex = mealPlan.tabName.indexOf('(');

      // check how many duplicates currently exist (represented by i)
      if (strIndex !== -1) {
        const tabNameSlice = mealPlan.tabName.slice(0, strIndex - 1);
        if (tabNameSlice === `Meal Plan ${mealPlans.length + 1}`)
          duplicateNum++;
      } else {
        if (mealPlan.tabName === `Meal Plan ${mealPlans.length + 1}`)
          duplicateNum++;
      }
    });

    // if one or more duplicates exist, add a parenthesis and number it the duplicate number
    duplicateNum > 0
      ? setMealPlans([
          ...mealPlans,
          {
            ...newMealPlan,
            tabName: `Meal Plan ${mealPlans.length + 1} (${duplicateNum})`,
          },
        ])
      : setMealPlans([
          ...mealPlans,
          { ...newMealPlan, tabName: `Meal Plan ${mealPlans.length + 1}` },
        ]);

    setValue(mealPlans.length);
  };

  const deleteMealPlan = () => {
    // Filters out currently selected meal plan

    const newMealPlans = mealPlans.filter((mealPlan, index) => {
      return index !== value;
    });

    setMealPlans(newMealPlans);

    // Sets the correct active tab if you delete a tab right to left
    if (value === mealPlans.length - 1) {
      setValue(mealPlans.length - 2);
      dispatch(
        saveActiveMealPlanValue({
          activeMealPlanValue: mealPlans.length - 2,
          currentUserId: currentUserId,
        })
      );
    }

    setOpenDeletePlanDialog(false);

    // Add to firebase
    dispatch(
      addMealPlansFirebase({
        mealPlans: newMealPlans,
        currentUserId: currentUserId,
      })
    );
  };

  return (
    <>
      <Box sx={{ marginBottom: '20rem' }}>
        {isGuest === 'true' && (
          <WelcomeDialog
            open={openWelcome === 'true' ? true : false}
            handleClickYes={handleCloseWelcome}
            // handleCheckbox={handleCheckbox}
          />
        )}
        <DeleteMealDialog
          open={openDeletePlanDialog}
          handleClickYes={deleteMealPlan}
          handleCloseAlert={handleCloseDeletePlanDialog}
        />
        <PageHeader title={'Meal Planner'} divider={false} />
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
          }}
        >
          <IconButton onClick={addNewMealPlan} aria-label="add new meal plan">
            <AddIcon />
          </IconButton>
          <Tabs
            value={value}
            onChange={handleChangeTab}
            aria-label="meal plan tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            {mealPlans.map((mealPlan, index) => (
              <Tab key={index} label={mealPlan.tabName} {...a11yProps(0)} />
            ))}
          </Tabs>
          <IconButton
            onClick={handleOpenDeletePlanDialog}
            aria-label="delete meal plan"
          >
            <DeleteForeverIcon />
          </IconButton>
        </Box>

        {mealPlans.map((mealPlan, index) => (
          <TabPanel key={index} value={value} index={index}>
            <MealPlan
              mealPlan={mealPlan}
              tabName={mealPlans[index].tabName}
              mealPlanIndex={index}
              mealPlans={mealPlans}
              setMealPlans={setMealPlans}
              value={value}
            />
          </TabPanel>
        ))}
      </Box>
    </>
  );
}
