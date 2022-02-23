import React, { useState, useEffect } from 'react';

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
import AlertDialog from '../components/AlertDialog';

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

// const mealPlans = [{breakfastRows: [{meal}, lunchRows: [{meal}]]}, {}];

const newMealPlan = {
  breakfastRows: [
    {
      id: 1,
      mealName: 'Protein Pancakes',
      calories: 533,
      protein: 33,
      carbs: 60,
      fats: 9,
    },
    {
      id: 2,

      mealName: 'Eggs',
      calories: 200,
      protein: 12,
      carbs: 0,
      fats: 10,
    },
    {
      id: 3,

      mealName: 'Shake',
      calories: 321,
      protein: 20,
      carbs: 40,
      fats: 4,
    },
  ],
  lunchRows: [
    {
      mealName: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    },
  ],
  dinnerRows: [
    {
      mealName: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    },
  ],
  snacksRows: [
    {
      mealName: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    },
  ],
  tabName: 'Meal Plan 1',
};

export default function MealPlanner() {
  const [value, setValue] = useState(0);
  const [mealPlans, setMealPlans] = useState([newMealPlan]);
  const [open, setOpen] = useState(false);

  const handleOpenAlert = () => {
    setOpen(true);
  };

  const handleCloseAlert = e => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addNewMealPlan = () => {
    // Handle naming the new tab if duplicate name(s) exist
    let i = 0;
    mealPlans.forEach(mealPlan => {
      const strIndex = mealPlan.tabName.indexOf('(');

      if (strIndex !== -1) {
        const tabNameSlice = mealPlan.tabName.slice(0, strIndex - 1);
        if (tabNameSlice === `Meal Plan ${mealPlans.length + 1}`) i++;
      } else {
        if (mealPlan.tabName === `Meal Plan ${mealPlans.length + 1}`) i++;
      }
    });

    i > 0
      ? setMealPlans([
          ...mealPlans,
          {
            ...newMealPlan,
            tabName: `Meal Plan ${mealPlans.length + 1} (${i})`,
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
    setMealPlans(
      mealPlans.filter((mealPlan, index) => {
        return index !== value;
      })
    );

    // Sets the correct active tab if you delete a tab right to left
    if (value === mealPlans.length - 1) setValue(mealPlans.length - 2);

    setOpen(false);
  };

  return (
    <Box>
      <AlertDialog
        open={open}
        deleteMealPlan={deleteMealPlan}
        handleCloseAlert={handleCloseAlert}
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
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          {mealPlans.map((mealPlan, index) => (
            <Tab key={index} label={mealPlan.tabName} {...a11yProps(0)} />
          ))}
        </Tabs>
        <IconButton onClick={handleOpenAlert} aria-label="delete meal plan">
          <DeleteForeverIcon />
        </IconButton>
      </Box>

      {mealPlans.map((mealPlan, index) => (
        <TabPanel key={index} value={value} index={index}>
          <MealPlan
            tabName={mealPlans[index].tabName}
            mealPlanIndex={index}
            mealPlans={mealPlans}
            setMealPlans={setMealPlans}
          />
        </TabPanel>
      ))}
    </Box>
  );
}
