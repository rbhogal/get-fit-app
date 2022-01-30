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

function createData(label, input) {
  return { label, input };
}

const renderSexInput = () => {
  return <SelectDropdown />;
};

const rows = [
  { label: 'Sex', input: renderSexInput },
  createData('Goal', 237),
  createData('Fat Loss Deficit/Muscle Gain (%)', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

const selectSexData = {
  label: 'Sex',
  selectItems: ['Male', 'Female'],
};

const selectAgeData = {
  label: 'Age',
  selectItems: Array.from(Array(10).keys()),
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
  const [value, setValue] = useState('');

  console.log(userData);

  const handleChange = e => {
    if (e.target.name === 'Sex') {
      setUserData({ ...userData, sex: e.target.value });
    }

    if (e.target.name === 'Age') {
      setUserData({ ...userData, age: e.target.value });
    }

    if (e.target.name === 'Height') {
      setUserData({ ...userData, height: e.target.value });
    }
  };

  return (
    <Paper sx={{ margin: '5rem 25% 0 25%' }} elevation={2}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {'Sex'}
              </TableCell>
              <TableCell size="small" align="right">
                <SelectDropdown
                  userData={userData}
                  selectData={selectSexData}
                  handleChange={handleChange}
                  value={userData.sex}
                />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {'Age'}
              </TableCell>
              <TableCell size="small" align="right">
                <NumberTextField name={'Age'} handleChange={handleChange} />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {'Height'}
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
                {'Weight'}
              </TableCell>
              <TableCell size="small" align="right">
                <NumberTextField name={'Weight'} handleChange={handleChange} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserProfile;
