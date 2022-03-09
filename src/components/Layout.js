import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Footer from '../components/Footer';

import ResponsiveAppBar from './ResponsiveAppBar';

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
