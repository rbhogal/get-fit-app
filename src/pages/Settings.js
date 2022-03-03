import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ref, remove } from 'firebase/database';
// import { reauthenticateWithCredential } from 'firebase/auth';

import { Box } from '@mui/material';
import { Button } from '@mui/material';

import PageHeader from '../components/PageHeader';
// import { auth, db } from '../firebase';
import authContext from '../context/authContext';
import AlertDialog from '../components/AlertDialog';
// import { deleteUserFirebase } from '../firebase';

const Settings = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const authCtx = useContext(authContext);
  // const { currentUserId } = authCtx;
  // const navigate = useNavigate();

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  // const handleSignOut = () => {
  //   const isGuest = localStorage.getItem('isGuest');

  //   auth.signOut();
  //   authCtx.signOut();

  //   if (isGuest === 'true') deleteUser();
  //   localStorage.removeItem('isGuest');
  //   localStorage.removeItem('profilePic');
  //   navigate('/');
  // };

  const deleteUserAccount = () => {
    const isGuest = localStorage.getItem('isGuest');

    if (isGuest === 'true') {
      localStorage.removeItem('isGuest');
      localStorage.removeItem('profilePic');
    }

    // deleteUserFirebase(user);

    // remove(ref(db, 'users/' + currentUserId));
    // remove(ref(db, 'userStats/' + currentUserId));
    // remove(ref(db, 'mealPlans/' + currentUserId));

    // auth.signOut();
    // authCtx.signOut();
    // navigate('/');
  };

  return (
    <>
      <PageHeader title={'Settings'} divider={true} />
      <AlertDialog
        open={openDeleteModal}
        handleCloseAlert={handleCloseDeleteModal}
        handleClickYes={deleteUserAccount}
        dialogContentText={
          'Are you sure you want to delete your user account? Account is permanently deleted.'
        }
      />
      <Box
        sx={{
          mt: 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button onClick={handleOpenDeleteModal} variant="contained">
          Delete Account
        </Button>
      </Box>
    </>
  );
};

export default Settings;
