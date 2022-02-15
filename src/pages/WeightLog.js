import { Typography } from '@mui/material';
import React from 'react';
import PageHeader from '../components/PageHeader';

const WeightLog = () => {
  return (
    <div>
      <PageHeader title={'Weight Log'} divider={true} />

      <Typography
        style={{ margin: '1.5rem 0', textAlign: 'center' }}
        variant="body1"
      >
        Future update
      </Typography>
    </div>
  );
};

export default WeightLog;
