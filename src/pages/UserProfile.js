import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

import SelectDropdown from '../components/SelectDropdown';
import NumberTextField from '../components/text-fields/NumberTextField';
import HeightTextField from '../components/text-fields/HeightTextField';
import ResultsTable from '../components/ResultsTable';

const selectSex = {
  label: 'Sex',
  selectItems: ['Male', 'Female'],
};

const selectGoal = {
  label: 'Goal',
  selectItems: ['Fat Loss', 'Muscle Gain'],
};

const selectActivityLevel = {
  label: 'Activity Level',
  selectItems: [
    'Sedentary — Desk job and little to no exercise',
    'Lightly Active — Light exercise/sports 1-3 day/week',
    'Moderately Active — Moderate exercise/sport 3-5 days/week',
    'Very Active — Hard exercise/sports 6-7 days/week',
    'Extremely Active — Hard daily exercise/sports and physical job',
  ],
};

const convertHeightUnits = (feet, inches) => {
  const heightInCm = feet * 30.48 + inches * 2.54;
  return heightInCm;
};

const UserProfile = () => {
  const [userData, setUserData] = useState({
    sex: '',
    age: '',
    height: '',
    weight: '',
    goal: '',
    activityLevel: '',
    bmr: '',
    tdee: '',
    calories: '',
  });

  // console.log(userData);

  /* 
    Text Fields
    * Age
    * Height: ft, inches
    * Weight: lbs
    * 
  */

  const handleChange = e => {
    if (e.target.name === 'Sex') {
      setUserData({ ...userData, sex: e.target.value });
    }
    if (e.target.name === 'Age') {
      setUserData({ ...userData, age: e.target.value });
    }

    if (e.target.name === 'feet' || e.target.name === 'inches') {
      //  if(e.target.name === 'feet')
      const height = convertHeightUnits();
      setUserData({ ...userData, height: height });
    }

    if (e.target.name === 'Weight') {
      setUserData({ ...userData, weight: e.target.value });
    }

    if (e.target.name === 'Goal') {
      setUserData({ ...userData, goal: e.target.value });
    }

    if (e.target.name === 'Activity Level') {
      setUserData({ ...userData, activityLevel: e.target.value });
    }
  };

  return (
    <div>
      <Box sx={{ margin: '2.5rem 25% 0 25%' }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong> Sex</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectDropdown
                    selectData={selectSex}
                    handleChange={handleChange}
                    value={userData.sex}
                  />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Age</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <NumberTextField name={'Age'} handleChange={handleChange} />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Height</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <HeightTextField
                    name={'Height'}
                    handleChange={handleChange}
                    value={userData.height}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Weight</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <NumberTextField
                    name={'Weight'}
                    handleChange={handleChange}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Goal</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectDropdown
                    selectData={selectGoal}
                    handleChange={handleChange}
                    value={userData.goal}
                  />
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong>Activity Level</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectDropdown
                    selectData={selectActivityLevel}
                    handleChange={handleChange}
                    value={userData.activityLevel}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ textAlign: 'right', marginRight: '1.25rem' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Calculate
          </Button>
        </Box>

        <ResultsTable />
      </Box>
    </div>
  );
};

export default UserProfile;
