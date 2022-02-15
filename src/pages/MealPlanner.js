import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import MealPlan from '../components/MealPlan';
import PageHeader from '../components/PageHeader';

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

// const mealPlans = [{}, {}];

const newMealPlan = {
  breakfastRows: [
    {
      id: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    },
  ],
  lunchRows: [
    {
      id: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    },
  ],
  dinnerRows: [
    {
      id: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    },
  ],
  snacksRows: [
    {
      id: '',
      calories: '',
      protein: '',
      carbs: '',
      fats: '',
    },
  ],
};

export default function MealPlanner() {
  const [value, setValue] = useState(0);
  const [mealPlans, setMealPlans] = useState([newMealPlan]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const addNewMealPlan = () => {
    setValue(mealPlans.length);
    setMealPlans([...mealPlans, newMealPlan]);
  };

  return (
    <Box>
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
          {mealPlans.map((plan, index) => (
            <Tab
              key={index}
              label={`Meal Plan ${index + 1}`}
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </Box>

      {mealPlans.map((mealPlan, index) => (
        <TabPanel key={index} value={value} index={index}>
          <MealPlan mealPlan={mealPlan} />
        </TabPanel>
      ))}
    </Box>
  );
}
