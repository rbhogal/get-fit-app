import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';

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

export default function MealPlanner() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // console.log(event.target.value);
    setValue(newValue);
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
        {/* Nesting anything other than a string is causing an error: This is an issue with MUI https://github.com/mui/material-ui/issues/21015*/}
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
