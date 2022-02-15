import React from 'react';
import { Typography, Divider } from '@mui/material';

const PageHeader = ({ title, divider }) => {
  return (
    <>
      <Typography
        sx={{
          marginTop: '2.5rem',
          fontSize: '2rem',
          textTransform: 'uppercase',
        }}
        gutterBottom
        fontWeight={700}
        variant="h3"
      >
        {title}
      </Typography>
      {divider && <Divider />}
    </>
  );
};

export default PageHeader;
