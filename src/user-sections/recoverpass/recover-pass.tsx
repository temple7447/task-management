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
export default function RecoverPassView() {
    const theme = useTheme();
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<any>(false);
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const [loading, setLoading] = useState<any>(false);
    const [error, setError] = useState<any>(null);

    const backgroundStyle = useBackgroundImage();
    const handleSubmit = () => {

        router.push('/verifyotp');

    }

    // const { isValid, errors } = usePasswordValidation(password);
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

                <Logo />

                <Card
                    sx={{
                        p: 5,
                        width: '100%',
                        maxWidth: 500,
                        [theme.breakpoints.up('sm')]: {
                            maxWidth: 600, // Max width for small screens and up
                        },
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2, textAlign: 'left' }}>Recover password</Typography>
                    <Typography variant="h6" sx={{ mb: 5, textAlign: 'left', fontSize: 15 }}>
                        We’ll send a code to the email you registered with
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 5, sm: 0 }} alignItems="center">
                            <TextField
                                name="Email"
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!!email && !isEmailValid(email)}
                                fullWidth
                                helperText={!!email && !isEmailValid(email) ? 'An account with this email does not exist.' : ''}
                                sx={{
                                    height: 45, // Default height
                                    [theme.breakpoints.up('sm')]: {
                                        height: 52, // Height for small screens and up
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 0, // Remove border radius for outlined variant
                                        borderColor: 'blue'
                                    },
                                    '& .MuiInputBase-root': {
                                        borderRadius: 0, // Remove border radius for other variants
                                        borderColor: 'blue'
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

                            <LoadingButton
                                size="large"
                                type="submit"
                                variant="contained"
                                color="inherit"
                                loading={loading}

                                sx={{
                                    width: '100%',
                                    height: 45, // Default height
                                    backgroundColor: loading ? 'red' : '#AEB3C1', // Change color based on loading state
                                    color: 'white', // Ensure the text remains visible
                                    '&:hover': {
                                        backgroundColor: loading ? 'red' : '#9AA1B0', // Slightly darker hover effect when not loading
                                    },
                                    borderRadius: 0, // Remove border radius
                                    [theme.breakpoints.up('sm')]: {
                                        height: 52, // Height for small screens and up
                                        width: 162,
                                    },
                                }}
                            >
                                Login
                            </LoadingButton>
                        </Stack>

                        {error && (
                            <Typography color="error" sx={{ mt: 3 }}>
                                {error}
                            </Typography>
                        )}
                    </form>
                </Card>
            </Stack>


        </Box>
    );
}



