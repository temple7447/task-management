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


export default function NotificationView() {
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
                            }}>Email notifications</Typography>

                        </Stack>
                        <Stack>
                            <Typography sx={{
                                fontSize: "14px", color: "#808898", fontWeight: '400', fontFamily: "Manrope"
                            }}>Enable email notifications on for different events like task updates, new messages, etc.</Typography>

                        </Stack>

                    </Grid>






                </Grid>

                <Box component="div" sx={{ borderBottom: "1px solid  red", my: 4 }} />

                <Grid size={12} container  >

                    <Grid size={{ xs: 12, }}>
                        <Stack>
                            <Typography sx={{
                                fontSize: "14px", color: "#808898", fontWeight: '400', fontFamily: "Manrope"
                            }}>Push notifications</Typography>

                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, }} >
                        <Button
                            sx={{
                                color: '#FFFFFF', fontSize: 13, fontWeight: "500", bgcolor: "#415BE7", width: "116px", height: "33px"
                            }}>Save changes</Button>
                    </Grid>

                </Grid>



            </Grid>






        </Container>


    );
}
