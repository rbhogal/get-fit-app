import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import MealPlan from '../components/MealPlan';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
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

export default function MealPlanner() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
        }}
      >
        <IconButton aria-label="add new meal plan">
          <AddIcon />
        </IconButton>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Meal Plan 3" {...a11yProps(0)} />
          <Tab label="Meal Plan 2" {...a11yProps(1)} />
          <Tab label="Meal Plan 1" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <MealPlan />
      </TabPanel>

      <TabPanel value={value} index={1}>
        Meal Plan 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Meal Plan 1
      </TabPanel>
    </Box>
  );
}
