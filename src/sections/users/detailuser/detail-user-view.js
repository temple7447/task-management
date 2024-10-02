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

import { useState } from 'react';
import AvatarList from '../../../components/Avater/overlap';
import { calender, message, radio, thridimage, userid } from '../../../_mock/image';
import UserTable from '../user-table';
import Toptab from '../component/top-tab';



// ----------------------------------------------------------------------
// sm={6} md={8}

// direction="row"
// justifyContent="space-around"
// alignItems="center"
// sx={{ p: 3, borderRadius: 2 }}
// <EmptyContainer />
// 


export default function DetailUserView() {

    const theme = useTheme();
    const [selected, setSelected] = useState(false);

    const handleChange = (event) => {
        setSelected(event.target.checked);
    };


    return (
        <>
            <Stack direction="row" columnGap={1} alignItems="center" sx={{ bgcolor: '#fff', width: '100%', height: '64px', px: 3, borderBottom: "1px solid #F3F4F6" }} >
                <Typography component="span" sx={{
                    fontFamily: 'Manrope', fontWeight: '700', fontSize: "15px", lineHeight: '27.32px',
                    [theme.breakpoints.up('sm')]: {
                        fontSize: "20px",

                    },
                }}>
                    User details
                </Typography>


            </Stack>
            <Container maxWidth="xl" sx={{
                flexGrow: 1,
                flex: 1,
                pt: 2
            }} >


                <Grid container size={{ xs: 12, md: 12, }} sx={{
                    height: '843px',
                    overflow: 'hidden',
                    bgcolor: "#FFFFFF",
                    width: "100%",
                    borderRadius: "16px",
                }} spacing={3}>
                    <Stack sx={{ width: "100%" }}>

                        <Stack flexDirection={"row"} justifyContent={"space-between"} sx={{ p: 2, }}>
                            <Stack flexDirection={"row"} sx={{ display: 'flex', }}  >
                                <Box
                                    component="img"
                                    src={thridimage}
                                    sx={{ height: 64, width: 64, borderRadius: "44px", }}
                                />
                                <Stack>
                                    <Typography component="span" sx={{
                                        fontFamily: 'Manrope', fontWeight: '600', fontSize: "14px", lineHeight: '22.32px',
                                        [theme.breakpoints.up('sm')]: {
                                            fontSize: "14px",

                                        },
                                    }}>
                                        Deborah Amakiri
                                    </Typography>
                                    <Typography component="span" sx={{
                                        fontFamily: 'Manrope', fontWeight: '400', fontSize: "14px", lineHeight: '22.32px', color: "#808898",
                                        [theme.breakpoints.up('sm')]: {
                                            fontSize: "14px",

                                        },
                                    }}>
                                        deborahamakiri@gmail.com
                                    </Typography>
                                </Stack>



                            </Stack>
                            <Button sx={{ bgcolor: "#F3F4F6", width: "97px", height: "37px", borderRadius: "7px", color: "#263446", fontSize: "13px", fontWeight: "500", fontFamily: "Manrope", lineHeight: "20.8px" }}>
                                Edit profile

                            </Button>


                        </Stack>

                        <Stack flexDirection={"row"} sx={{ my: 2, px: 2, }} columnGap={{ xs: 2, sm: 10 }} >
                            <Stack spacing={2} >
                                <Typography component="span" sx={{
                                    fontFamily: 'Manrope', fontWeight: '400', fontSize: "14px", lineHeight: '22.32px', color: "#808898",
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: "14px",

                                    },
                                }}>
                                    BRANCH
                                </Typography>

                                <Typography component="span" sx={{
                                    fontFamily: 'Manrope', fontWeight: '500', fontSize: "14px", lineHeight: '22.32px', color: "#263446",
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: "14px",

                                    },
                                }}>
                                    Loveworld UK
                                </Typography>
                            </Stack>
                            <Stack spacing={2} >
                                <Typography component="span" sx={{
                                    fontFamily: 'Manrope', fontWeight: '400', fontSize: "14px", lineHeight: '22.32px', color: "#808898",
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: "14px",

                                    },
                                }}>
                                    ROLE
                                </Typography>

                                <Typography component="span" sx={{
                                    fontFamily: 'Manrope', fontWeight: '500', fontSize: "14px", lineHeight: '22.32px', color: "#263446",
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: "14px",

                                    },
                                }}>
                                    Manager
                                </Typography>
                            </Stack>
                            <Stack spacing={2} >
                                <Typography component="span" sx={{
                                    fontFamily: 'Manrope', fontWeight: '400', fontSize: "14px", lineHeight: '22.32px', color: "#808898",
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: "14px",

                                    },
                                }}>
                                    LAST ACTIVITY
                                </Typography>

                                <Typography component="span" sx={{
                                    fontFamily: 'Manrope', fontWeight: '400', fontSize: "14px", lineHeight: '22.32px', color: "#263446",
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: "14px",

                                    },
                                }}>
                                    Today, 9:32 am
                                </Typography>
                            </Stack>
                        </Stack>
                        <Toptab />


                    </Stack>

                </Grid>








            </Container>

        </>

    );
}
