import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import ResponsiveAppBar from './ResponsiveAppBar';

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      {/* <Box 
      sx={{ padding: '1rem 15% 5rem 15%' }}
      > */}
      <Container>
        <Outlet />
      </Container>

      {/* </Box> */}
    </div>
  );
};

export default Layout;
