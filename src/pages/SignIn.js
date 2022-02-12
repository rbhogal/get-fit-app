import React, { useContext } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';

import { signInWithPopup, signInAnonymously } from 'firebase/auth';
import { set, ref, get, child } from 'firebase/database';

import { auth, provider, dbRef, db } from '../firebase';
import signInImg from '../images/sign-in-img.jpg';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const userId = result.user.uid;
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const token = result.user.accessToken;

        // Check if new user
        get(child(dbRef, `users/${userId}`))
          .then(snapshot => {
            if (snapshot.exists()) {
              // User exists
              authCtx.signIn(token);
              localStorage.setItem('profilePic', `${result.user.photoURL}`);
              // alert

              // Navigate user to account
              navigate('/');
            } else {
              // Create new user
              createNewUser(userId, name, email, profilePic);
              // Sign in user
              authCtx.signIn(token);
              // Navigate user to account
              navigate('/');
            }
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const signInAsGuest = () => {
    signInAnonymously(auth)
      .then(result => {
        const token = result.user.accessToken;
        authCtx.signIn(token);

        navigate('/');
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const createNewUser = (userId, name, email, imageUrl) => {
    set(ref(db, 'users/' + userId), {
      userId: userId,
      username: name,
      email: email,
      profilePic: imageUrl,
    });
  };

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          height: 600,
          boxShadow:
            '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: 400 }}>
            <CardMedia
              component="img"
              alt="Sign In Hero"
              src={signInImg}
              width="400"
              height="600"
              sx={{ objectFit: 'cover' }}
            />
          </Box>

          <CardContent
            sx={{
              width: 368,
              backgroundColor: '#f3f4f6',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              fontWeight="extraBold"
              variant="h3"
              component="div"
              sx={{ letterSpacing: '-.05em', lineHeight: 1 }}
            >
              GetFIT
            </Typography>
            <Typography
              sx={{ marginBottom: '1rem', fontSize: '1.125rem' }}
              variant="h6"
              color="text.primary"
            >
              Stay fit.
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Meal planning made easy.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',

                marginTop: '1.5rem',
                width: 250,
              }}
            >
              <Button
                sx={{
                  margin: 1,
                  padding: '.5rem',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  paddingRight: '1.5rem',
                }}
                variant="contained"
                size="small"
                startIcon={<PersonIcon />}
                onClick={signInAsGuest}
              >
                Sign in as Guest
              </Button>
              <Button
                sx={{
                  margin: 1,
                  padding: '.5rem',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  backgroundColor: 'white',
                  color: 'dimgrey',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  },
                }}
                variant="contained"
                size="small"
                startIcon={<GoogleIcon />}
                onClick={signInWithGoogle}
              >
                Sign in with Google
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Paper>
  );
}
