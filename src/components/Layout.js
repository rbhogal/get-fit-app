import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import ResponsiveAppBar from './ResponsiveAppBar';

const Layout = () => {
  return (
    <div sx={{ backgroundColor: '#f3f4f6' }}>
      <ResponsiveAppBar />

      <Box sx={{ padding: '1rem 15% 5rem 15%' }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
