import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Typography, Stack, Box, Button, Radio, FormControlLabel } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
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
import { calender, message, radio, userid } from '../../../_mock/image';



// ----------------------------------------------------------------------
// sm={6} md={8}

// direction="row"
// justifyContent="space-around"
// alignItems="center"
// sx={{ p: 3, borderRadius: 2 }}
// <EmptyContainer />
// 


export default function UserTableView() {

    const theme = useTheme();
    const [selected, setSelected] = useState(false);

    const handleChange = (event) => {
        setSelected(event.target.checked);
    };

   
    return (
        <>
            <Stack direction="row" columnGap={1} justifyContent="space-between" alignItems="center" sx={{ bgcolor: '#fff', width: '100%', height: '64px', px: 3, borderBottom: "1px solid #F3F4F6" }} >
                <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '700', fontSize: "15px", lineHeight: '27.32px',
                    [theme.breakpoints.up('sm')]: {
                       fontSize: "20px", 
                
                    },
                 }}>
                 Loveworld UK
                </Typography>

                <Stack direction="row" alignItems="center" columnGap={1}  >
                <AvatarList height="24px" width="24px" />
                 
                    <Button
                        sx={{ color: '#FFFFFF', fontSize: "13px", lineHeight: "20.8px", fontWeight: '500', fontFamily: 'Manrope', bgcolor:"#E65889", borderRadius:"7px", p:1 }}
                        startIcon={< GroupAddIcon sx={{ color: '#FFFFFF', fontSize: "23.2px" }} />} >
                        Invite
                    </Button>
                </Stack>


            </Stack>
            <Container maxWidth="xl" sx={{
                flexGrow: 1,
                flex: 1,
                pt: 2
            }} >


                <Grid container size={{ xs: 12, }} sx={{
                    height: '100%',
                    overflow: 'hidden'
                }} spacing={3}>

<UserTable  />              






                </Grid>








            </Container>

        </>

    );
}
