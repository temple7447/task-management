import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Link, Card, Stack, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { useRouter } from '../../routes/hooks';
import { bgGradient } from '../../theme/css';
import { useBackgroundImage } from '../../hooks/useBackgroundImage';
import LoadingButton from '@mui/lab/LoadingButton';
import { usePasswordValidation } from '../../hooks/ usePasswordValidation';
import Logo from '../../components/logo';
import CheckIcon from '@mui/icons-material/Check';
// ----------------------------------------------------------------------


{/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */ }
// 
export default function RecoverNewPasswordView() {
  const theme = useTheme();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<any>(false);
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);

  const backgroundStyle = useBackgroundImage();
  const handleSubmit = () => {

    router.push('/login');

  }

  const isEmailValid = (emailAddress: any) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);




  return (
    <Box sx={backgroundStyle}>
      <Stack
        sx={{
          width: '100%',
          height: '100vh',
          alignItems: 'center',
          // justifyContent: 'center',
        }}

      >
      <Logo  />

        <Card
          sx={{
            p: 5,
            width: '100%',
            maxWidth: 500,
            [theme.breakpoints.up('sm')]: {
              maxWidth: 600, // Height for small screens and up
            },
          }}

        >
          <Typography variant="h4" sx={{mb:4}} style={{ textAlign: 'left', }}>Set a new password to continue</Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>

              <Stack spacing={.5}>
                <Typography variant="h6" style={{ textAlign: 'left', fontSize: 13, }}>New password</Typography>
                <TextField
                  name="Email"
                  type="email"
                  placeholder="Enter new password"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!email && !isEmailValid(email)}
                  helperText={!!email && !isEmailValid(email) ? 'An account with this email does not exist. Check the email and try again' : ''}
                  sx={{
                    height: 45, // Default height
                    [theme.breakpoints.up('sm')]: {
                      height: 52, // Height for small screens and up
                    },
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          {email && isEmailValid(email) ? <CheckIcon color="success" /> : null}
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Stack>

              <Stack spacing={.5}>
                <Typography variant="h6" style={{ textAlign: 'left', fontSize: 13, }}>Confirm new password</Typography>
                <TextField
                  name="password"
                  placeholder="Confirm new password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}  />
                        </InputAdornment>
                      ),
                    },
                  }}
                  helperText={!!password ? 'An account with this email does not exist. Check the email and try again' : ''}
                />

              </Stack>
            </Stack>

        

            {error && (
              <Typography color="error" sx={{ mb: 3 }}>
                {error}
              </Typography>
            )}
            <Stack sx={{mt:5}}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="inherit"
              loading={loading}

              // disabled={!email || !password || !!(email && !isEmailValid(email))}
              sx={{
                backgroundColor: loading ? 'red' : '#AEB3C1', // Change color based on loading state
                color: 'white', // Ensure the text remains visible
                '&:hover': {
                  backgroundColor: loading ? 'red' : '#9AA1B0', // Slightly darker hover effect when not loading
                },
              }}
            >
             Proceed to login
            </LoadingButton>
            </Stack>
          </form>
        </Card>
      </Stack>


    </Box>
  );
}



