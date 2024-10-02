import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid2';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Link, Card, Stack, TextField, Typography, IconButton, InputAdornment, Button } from '@mui/material';
import { useRouter } from '../../routes/hooks';
import { useBackgroundImage } from '../../hooks/useBackgroundImage';
import LoadingButton from '@mui/lab/LoadingButton';
import Logo from '../../components/logo';
// ----------------------------------------------------------------------


{/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */ }
// 
export default function VerifyOtpView() {
  const theme = useTheme();
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const backgroundStyle = useBackgroundImage();


  const handleInputChange = (e, index) => {
    let value = e.target.value;
  
    // Ensure that only the first character (if more than one character is entered) is used
    if (value.length > 1) {
      value = value.charAt(0);
    }
  
    // Allow the field to be cleared (empty value)
    if (value === '' || /^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
  
      // Move to the next input if current one is filled (and not the last input)
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
  
      // Move to the previous input if the current one is cleared (backspace)
      if (value === '' && index > 0) {
        document.getElementById(`code-${index - 1}`).focus();
      }
    }
  };
  
  const handleSubmit = () => {
    const enteredCode = code.join('');
    if (enteredCode.length === 6) {
      console.log('Code submitted:', enteredCode);
      router.push("/recovernewpassword")
      setError('');
    } else {
      setError('Please enter a valid 6-digit code');
    }
  };

  const handleResendCode = () => {
    console.log('Resend code triggered');
  };






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

        <Logo />

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
          <Typography style={{ marginBottom: 16, textAlign: 'center', fontSize: 24, fontFamily: 'Manrope', fontWeight: "700", lineHeight: '32.78px' }}>We’ve sent you a code</Typography>
          <Typography align="center" sx={{ mb: 5, fontSize: "15px", lineHeight: "24px", fontFamily: 'Manrope' }}>A 6-digit code has been sent to  your email “tobiawokunle@gmail.com”. Enter to recover your password</Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>

              <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2, px: 4 }}>
                {code.map((digit, index) => (
                  <Grid item size={2} key={index}>
                    <TextField
                    slotProps={{
                      input: {
                        maxLength: 1,
                        style: { 
                          textAlign: 'center',  // Center text horizontally
                          fontSize: '24px',     // Font size as per your design
                          padding: '12px 0px',  // Ensure vertical centering by adjusting padding
                          height: '52px'        // Ensure height for vertical alignment
                        },
                        id: `code-${index}`,
                        inputMode: 'numeric', // Ensures numeric input on mobile devices
                        pattern: '[0-9]*',    // Restricts the input to numbers only
                      }
                    }}
                      sx={{ bgcolor: '#F3F4F6' }}
                      value={digit}
                      onChange={(e) => handleInputChange(e, index)}
                      variant="outlined"
                    />
                  </Grid>
                ))}
              </Grid>



            </Stack>



            {error && (
              <Typography color="error" sx={{ mb: 3 }}>
                {error}
              </Typography>
            )}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center', // Centers horizontally
                alignItems: 'center', // Centers vertically
                width: '100%',
              }}
            >
              <LoadingButton

                size="large"
                type="submit"
                // variant="contained"
                color="inherit"
                loading={loading}


                sx={{
                  mt: 6,
                  width: '100%',
                  height: "52px",
                  alignSelf: 'center',
                  borderRadius: .5,
                  backgroundColor: true ? '#415BE7' : '#AEB3C1', // Change color based on loading state
                  color: 'white', // Ensure the text remains visible
                  '&:hover': {
                    backgroundColor: true ? '#415BE7' : '#9AA1B0', // Slightly darker hover effect when not loading
                  },
                  [theme.breakpoints.up('sm')]: {
                    width: '162px',

                  },
                }}
              >
                Recover
              </LoadingButton>
            </Box>

          </form>
          <Typography align="center" color="#808898" sx={{ marginTop: 2, fontSize: 13, lineHeight: '20.8px', fontWeight: '400', fontFamily: 'Manrope', }}>
            Didn’t get the email? Check your spam or junk folder?{' '}
            <Button color="#263446" sx={{ textDecoration: 'underline' }} size="small" onClick={handleResendCode}>
              Resend code
            </Button>
          </Typography>
        </Card>

      </Stack>


    </Box>
  );
}



