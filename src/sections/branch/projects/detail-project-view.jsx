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
import { useRouter } from '../../../routes/hooks';



// ----------------------------------------------------------------------
// sm={6} md={8}

// direction="row"
// justifyContent="space-around"
// alignItems="center"
// sx={{ p: 3, borderRadius: 2 }}
// <EmptyContainer />
// 


export default function DetailsProjectView() {

    const theme = useTheme();
    const [selected, setSelected] = useState(false);



    const router = useRouter();

    const handleView = () => {
        router.push(`/branches/detailprojectusers`);

    };

    const handleChange = (event) => {
        setSelected(event.target.checked);
    };


    return (
        <>
            <Stack direction="row" columnGap={1} justifyContent="space-between" alignItems="center" sx={{ bgcolor: '#fff', width: '100%', height: '64px', px: 3, borderBottom: "1px solid #F3F4F6" }} >
                <Typography component="span" sx={{
                    fontFamily: 'Manrope', fontWeight: '700', fontSize: "15px", lineHeight: '27.32px',
                    [theme.breakpoints.up('sm')]: {
                        fontSize: "20px",

                    },
                }}>
                    Short film project
                </Typography>

                <Stack direction="row" alignItems="center" columnGap={1}  >
                    <AvatarList onPress={handleView} height="20px" width="20px" />

                    <Button
                        sx={{ color: '#FFFFFF', fontSize: "13px", lineHeight: "20.8px", fontWeight: '500', fontFamily: 'Manrope', bgcolor: "#E65889", borderRadius: "7px", p: 1 }}
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


                    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ bgcolor: '#FFFFFF', borderRadius: "16px", height: "495px", overflow: 'hidden', py: 1 }} >
                        <Box sx={{ py: 1, px: .7, height: "100%" }} >
                            <Stack flexDirection="row" rowspacing={3} justifyContent={"space-between"} alignItems="center" sx={{ px: 1 }} >
                                <Stack flexDirection="row" rowspacing={3} columnGap={1} alignItems="center" >
                                    <Box component="div" sx={{ height: "8px", width: "8px", borderRadius: "6px", bgcolor: "#E65889" }} />
                                    <Typography component="span" sx={{ mr: 1, fontWeight: '600', fontSize: "16px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446' }}>To do</Typography>
                                </Stack>
                                <Button endIcon={<AddIcon sx={{ color: '#808898', fontSize: '13px' }} />} sx={{
                                    color: '#808898', fontSize: '13px', fontWeight: '400', lineHeight: '20.8px', fontFamily: 'Manrope'
                                }} >
                                    Add task
                                </Button>
                            </Stack>


                            <Stack spacing={1} sx={{ bgcolor: '#F3F4F6', borderRadius: "12px", height: "100%", p: 1 }}  >
                                {
                                    shortfilm.todos.map((item, index) => (
                                        <Stack key={index} sx={{ height: "122px", borderRadius: "6px", bgcolor: '#FFFFFF', py: 2, px: 1 }}  >
                                            <Stack flexDirection={"row"} alignItems={"center"} columnGap={1} sx={{}}>
                                                <Box component="img" src={radio} alt="radio" sx={{ width: 20, height: 20, }} />
                                                <Typography component="span" sx={{ mr: 1, fontWeight: '500', fontSize: "14px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446' }}>{item.title}</Typography>
                                            </Stack>
                                            <Stack flexDirection={"row"} columnGap={1} alignItems={"center"} sx={{ bgcolor: "#F9FAFB", borderRadius: "4px", width: "60%", p: 1 }}>
                                                <Box component="img" src={calender} alt="calender" sx={{ width: 20, height: 20, }} />
                                                <Typography component="span" sx={{ mr: 1, fontWeight: '500', fontSize: "12px", fontFamily: 'Manrope', lineHeight: "19.86px", color: '#808898' }}>{item.date}</Typography>
                                            </Stack>

                                            <Stack flexDirection={"row"} alignItems={"center"} columnGap={1} justifyContent={"flex-end"} sx={{}}>
                                                <AvatarList onPress={handleView} height="24px" width="24px" />
                                                <Box component="img" src={userid} alt="userid" sx={{ width: 20, height: 20, }} />
                                                <Box component="img" src={message} alt="image" sx={{ width: 20, height: 20, }} />

                                            </Stack>

                                        </Stack>

                                    ))
                                }
                            </Stack>





                        </Box>
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ bgcolor: '#FFFFFF', borderRadius: "16px", height: "495px", overflow: 'hidden', py: 1 }} >
                        <Box sx={{ py: 1, px: .7, height: "100%" }} >
                            <Stack flexDirection="row" rowspacing={3} justifyContent={"space-between"} alignItems="center" sx={{ px: 1 }} >
                                <Stack flexDirection="row" rowspacing={3} columnGap={1} alignItems="center" >
                                    <Box component="div" sx={{ height: "8px", width: "8px", borderRadius: "6px", bgcolor: "#F7BC1E" }} />
                                    <Typography component="span" sx={{ mr: 1, fontWeight: '600', fontSize: "16px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446' }}>Doing</Typography>
                                </Stack>
                                <Button endIcon={<AddIcon sx={{ color: '#808898', fontSize: '13px' }} />} sx={{
                                    color: '#808898', fontSize: '13px', fontWeight: '400', lineHeight: '20.8px', fontFamily: 'Manrope'
                                }} >
                                    Add task
                                </Button>
                            </Stack>


                            <Stack spacing={1} sx={{ bgcolor: '#F3F4F6', borderRadius: "12px", height: "100%", p: 1 }}  >
                                {
                                    shortfilm.todos.map((item, index) => (
                                        <Stack key={index} sx={{ height: "122px", borderRadius: "6px", bgcolor: '#FFFFFF', py: 2, px: 1 }}  >
                                            <Stack flexDirection={"row"} alignItems={"center"} columnGap={1} sx={{}}>
                                                <Box component="img" src={radio} alt="radio" sx={{ width: 20, height: 20, }} />
                                                <Typography component="span" sx={{ mr: 1, fontWeight: '500', fontSize: "14px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446' }}>{item.title}</Typography>
                                            </Stack>
                                            <Stack flexDirection={"row"} columnGap={1} alignItems={"center"} sx={{ bgcolor: "#FFF2F2", borderRadius: "4px", width: "60%", p: 1 }}>
                                                <Box component="img" src={calender} alt="calender" sx={{ width: 20, height: 20, color: "#E47070" }} />
                                                <Typography component="span" sx={{ mr: 1, fontWeight: '500', fontSize: "12px", fontFamily: 'Manrope', lineHeight: "19.86px", color: '#E47070' }}>{item.date}</Typography>
                                            </Stack>

                                            <Stack flexDirection={"row"} alignItems={"center"} columnGap={1} justifyContent={"flex-end"} sx={{}}>
                                                <AvatarList />
                                                <Box component="img" src={userid} alt="userid" sx={{ width: 20, height: 20, }} />
                                                <Box component="img" src={message} alt="image" sx={{ width: 20, height: 20, }} />

                                            </Stack>

                                        </Stack>

                                    ))
                                }
                            </Stack>





                        </Box>
                    </Grid>



                    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ bgcolor: '#FFFFFF', borderRadius: "16px", height: "495px", overflow: 'hidden', py: 1 }} >
                        <Box sx={{ py: 1, px: .7, height: "100%" }} >
                            <Stack flexDirection="row" rowspacing={3} justifyContent={"space-between"} alignItems="center" sx={{ px: 1 }} >
                                <Stack flexDirection="row" rowspacing={3} columnGap={1} alignItems="center" >
                                    <Box component="div" sx={{ height: "8px", width: "8px", borderRadius: "6px", bgcolor: "#46B988" }} />
                                    <Typography component="span" sx={{ mr: 1, fontWeight: '600', fontSize: "16px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446' }}>Done</Typography>
                                </Stack>
                                <Button endIcon={<AddIcon sx={{ color: '#808898', fontSize: '13px' }} />} sx={{
                                    color: '#808898', fontSize: '13px', fontWeight: '400', lineHeight: '20.8px', fontFamily: 'Manrope'
                                }} >
                                    Add task
                                </Button>
                            </Stack>


                            <Stack spacing={1} sx={{ bgcolor: '#F3F4F6', borderRadius: "12px", height: "100%", p: 1 }}  >
                                {
                                    shortfilm.todos.map((item, index) => (
                                        <Stack key={index} sx={{ height: "122px", borderRadius: "6px", bgcolor: '#FFFFFF', py: 2, px: 1 }}  >
                                            <Stack flexDirection={"row"} alignItems={"center"} columnGap={1} sx={{}}>
                                                <Box component="img" src={radio} alt="radio" sx={{ width: 20, height: 20, }} />
                                                <Typography component="span" sx={{ mr: 1, fontWeight: '500', fontSize: "14px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446' }}>{item.title}</Typography>
                                            </Stack>
                                            <Stack flexDirection={"row"} columnGap={1} alignItems={"center"} sx={{ bgcolor: "#FFF2F2", borderRadius: "4px", width: "60%", p: 1 }}>
                                                <Box component="img" src={calender} alt="calender" sx={{ width: 20, height: 20, color: "#E47070" }} />
                                                <Typography component="span" sx={{ mr: 1, fontWeight: '500', fontSize: "12px", fontFamily: 'Manrope', lineHeight: "19.86px", color: '#E47070' }}>{item.date}</Typography>
                                            </Stack>

                                            <Stack flexDirection={"row"} alignItems={"center"} columnGap={1} justifyContent={"flex-end"} sx={{}}>
                                                <AvatarList onPress={handleView} height="24px" width="24px" />
                                                <Box component="img" src={userid} alt="userid" sx={{ width: 20, height: 20, }} />
                                                <Box component="img" src={message} alt="image" sx={{ width: 20, height: 20, }} />

                                            </Stack>

                                        </Stack>

                                    ))
                                }
                            </Stack>





                        </Box>
                    </Grid>






                </Grid>








            </Container>

        </>

    );
}
