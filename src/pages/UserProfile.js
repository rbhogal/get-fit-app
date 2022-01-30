import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

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

  console.log(userData);

  const handleChange = e => {
    if (e.target.name === 'Sex')
      setUserData({ ...userData, sex: e.target.value });

    if (e.target.name === 'Age')
      setUserData({ ...userData, age: e.target.value });

    if (e.target.name === 'Height') console.log(e.target.value);

    // if (e.target.name === 'Weight') setUserData({...userData, weight})

    if (e.target.name === 'Goal')
      setUserData({ ...userData, goal: e.target.value });
  };

  return (
    <div>
      <Paper sx={{ margin: '5rem 25% 0 25%' }} elevation={2}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong style={{ opacity: 0.8 }}> Sex</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectDropdown
                    userData={userData}
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
                  <strong style={{ opacity: 0.8 }}>Age</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <NumberTextField name={'Age'} handleChange={handleChange} />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <strong style={{ opacity: 0.8 }}>Height</strong>
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
                  <strong style={{ opacity: 0.8 }}>Weight</strong>
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
                  <strong style={{ opacity: 0.8 }}>Goal</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectDropdown
                    userData={userData}
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
                  <strong style={{ opacity: 0.8 }}>Activity Level</strong>
                </TableCell>
                <TableCell size="small" align="right">
                  <SelectDropdown
                    userData={userData}
                    selectData={selectActivityLevel}
                    handleChange={handleChange}
                    value={userData.activityLevel}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <ResultsTable />
    </div>
  );
};

export default UserProfile;
