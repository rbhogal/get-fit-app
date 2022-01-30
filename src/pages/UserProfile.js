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
  return <div>UserProfile</div>;
};

export default UserProfile;
