import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import dumbbell from '../images/dumbbell.png';
import { auth, db } from '../firebase';
import authContext from '../context/authContext';
import { ref, remove } from 'firebase/database';

const pages = [
  { title: 'Profile', path: 'profile' },
  {
    title: 'Meal Planner',
    path: '/',
  },
];
const settings = ['Sign Out'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const authCtx = useContext(authContext);
  const navigate = useNavigate();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = e => {
    setAnchorElNav(null);
  };

  const navToProfile = () => {
    navigate('profile');
    setAnchorElNav(null);
  };

  const navToMealPlanner = () => {
    navigate('/');
    setAnchorElNav(null);
  };

  const navToWeightLog = () => {
    navigate('weightlog');
    setAnchorElNav(null);
  };

  const handleSignOut = () => {
    const isGuest = localStorage.getItem('isGuest');

    auth.signOut();
    authCtx.signOut();
    if (isGuest === 'true') deleteUser();
    localStorage.removeItem('isGuest');
    localStorage.removeItem('profilePic');
    localStorage.removeItem('openWelcome');
    navigate('/');
  };

  const deleteUser = () => {
    const { currentUserId } = authCtx;
    remove(ref(db, 'users/' + currentUserId));
    remove(ref(db, 'userStats/' + currentUserId));
    remove(ref(db, 'mealPlans/' + currentUserId));
  };

  const handleCloseUserMenu = e => {
    setAnchorElUser(null);
  };

  const navToSettings = () => {
    navigate('settings');
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 1, display: { xs: 'none', md: 'flex' } }}
          >
            GetFIT
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img
              src={dumbbell}
              alt={'Dumbbell Logo'}
              style={{ width: '2rem', marginRight: '1.5rem' }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page.title}
                  onClick={
                    page.title === 'Profile'
                      ? navToProfile
                      : page.title === 'Meal Planner'
                      ? navToMealPlanner
                      : page.title === 'Weight Log'
                      ? navToWeightLog
                      : handleCloseNavMenu
                  }
                  path={page.path}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            GetFIT
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              ' & a': {
                textDecoration: 'none',
                '& :hover': { opacity: '0.9' },
              },
            }}
          >
            {pages.map(page => (
              <Link key={page.title} to={page.path}>
                <Button
                  aria-label="nav menu"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Avatar" src={localStorage.getItem('profilePic')} />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem
                  key={setting}
                  onClick={
                    setting === 'Sign Out' ? handleSignOut : navToSettings
                  }
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
