import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Typography, Stack, Box, Button, Radio, FormControlLabel, InputAdornment, TextField } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CheckIcon from '@mui/icons-material/Check';
// import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
// import AppOrderTimeline from '../app-order-timeline';
// import AppCurrentVisits from '../app-current-visits';
// import AppWebsiteVisits from '../app-website-visits';
// import AppWidgetSummary from '../app-widget-summary';
// import AppCurrentSubject from '../app-current-subject';
// import AppConversionRates from '../app-conversion-rates';

// import EmptyContainer from '../app-empty';
// import UserTable from '../UserTable';
import { recentativities } from '../../../_mock/account';
import { rows } from '../../../_mock/user';
import { completeTask, ongoingTask, shortfilm } from '../../../_mock/branch';
import UserTable from '../../overview/UserTable';
import { useState } from 'react';
import AvatarList from '../../../components/Avater/overlap';
import { calender, firstimage, message, radio, userid } from '../../../_mock/image';
import { useRouter } from '../../../routes/hooks';



// ----------------------------------------------------------------------
// sm={6} md={8}

// direction="row"
// justifyContent="space-around"
// alignItems="center"
// sx={{ p: 3, borderRadius: 2 }}
// <EmptyContainer />
// 


export default function RoleView() {
    const [email, setEmail] = useState("")
    const [fullname, setfullname] = useState("")
    const theme = useTheme();
    const [selected, setSelected] = useState(false);



    const router = useRouter();

    const handleView = () => {
        router.push(`/branches/detailprojectusers`);

    };

    const handleChange = (event) => {
        setSelected(event.target.checked);
    };

    const isEmailValid = (emailAddress) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
    return (

        <Container maxWidth="xl" sx={{
            flexGrow: 1,
            flex: 1,
        }} >

            <Grid size={12} container rowSpacing={3} >
                <Grid size={12} container  >

                    <Grid size={{ xs: 12, }}>
                        <Stack>
                            <Typography sx={{
                                fontSize: "14px", color: "#808898", fontWeight: '400', fontFamily: "Manrope"
                            }}>Personal information</Typography>
                            <Box
                                component="img"
                                src={firstimage}
                                alt="profile-image"
                                sx={{ width: "88px", height: "88px", }}
                            />
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }} sx={{ my: 1 }} >

                        <Stack spacing={.5}>
                            <Typography variant="h6" style={{ textAlign: 'left', fontSize: 13, }}>Full name</Typography>
                            <TextField
                                name="fullname"
                                type="text"
                                placeholder="Tobi Awokunle"
                                value={fullname}
                                onChange={(e) => setfullname(e.target.value)}
                                // error={!!email && !isEmailValid(email)}
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

                    </Grid>


                    <Grid size={{ xs: 12, sm: 4 }} sx={{ my: 1 }}>
                        <Stack spacing={.5}>
                            <Typography variant="h6" style={{ textAlign: 'left', fontSize: 13, }}>Email</Typography>
                            <TextField
                                name="email"
                                type="email"
                                placeholder="tobiawokunle@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // error={!!email && !isEmailValid(email)}
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



                    </Grid>
                    <Grid size={{ xs: 12, sm: 8 }} sx={{ my: 1 }}>
                        <Stack spacing={.5}>
                            <Typography variant="h6" style={{ textAlign: 'left', fontSize: 13, }}>Message</Typography>
                            <TextField
                                name="Message"
                                type="email"
                                placeholder="Message"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                // error={!!email && !isEmailValid(email)}
                                helperText={!!email && !isEmailValid(email) ? 'An account with this email does not exist. Check the email and try again' : ''}
                                sx={{
                                    height: 45, // Default height
                                    [theme.breakpoints.up('sm')]: {
                                        height: 108, // Height for small screens and up
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



                    </Grid>
                    <Grid size={{ xs: 12, }} >
                        <Button
                            sx={{
                                color: '#FFFFFF', fontSize: 13, fontWeight: "500", bgcolor: "#AEB3C1", width: "116px", height: "33px"
                            }}>Send your message</Button>
                    </Grid>

                </Grid>





            </Grid>






        </Container>


    );
}
