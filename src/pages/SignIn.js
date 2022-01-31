import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import { Paper } from '@mui/material';

import signInImg from '../images/sign-in-img.jpg';
import { Box } from '@mui/system';

export default function SignIn() {
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
