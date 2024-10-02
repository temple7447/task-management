import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Typography, Stack, Box, Button } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
import { completeTask, ongoingTask } from '../../../_mock/branch';
import UserTable from '../../overview/UserTable';
import { useRouter } from '../../../routes/hooks';



// ----------------------------------------------------------------------
// sm={6} md={8}

// direction="row"
// justifyContent="space-around"
// alignItems="center"
// sx={{ p: 3, borderRadius: 2 }}
// <EmptyContainer />
// 


export default function DetailsBranchView() {

    const router = useRouter();

  const theme = useTheme();
  const handleView = () => {
    router.push(`/branches/detailbranchproject`);

    // Implement view functionality here
  };

    return (
        <>
            <Stack direction="row" columnGap={1} justifyContent="space-between" alignItems="center" sx={{ bgcolor: '#fff', width: '100%', height: '64px', px: 3,borderBottom:"1px solid #F3F4F6" }} >
                <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '700', fontSize: "20px", lineHeight: '27.32px', }}>
                    Loveworld UK
                </Typography>

                <Stack direction="row" alignItems="center" columnGap={1}  >
                    <LocationOnIcon sx={{ color: '#808898', fontSize: 20 }} />
                    <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: "13px", lineHeight: '20.32px', }}>
                        🇬🇧 United Kingdom
                    </Typography>
                    <Button
                        sx={{ color: '#E47070', fontSize: "13px", lineHeight: "20.8px", fontWeight: '500', fontFamily: 'Manrope' }}
                        startIcon={< DeleteIcon sx={{ color: '#E47070', fontSize: "13.2px" }} />} >
                        Delete branch
                    </Button>
                </Stack>


            </Stack>
            <Container maxWidth="xl" sx={{
                flexGrow: 1,
                flex: 1,
                pt: 2
            }} >

                <Grid container spacing={3} sx={{ height: '80%' }}>

                    <Grid container size={{ xs: 12, sm: 12, md: 8 }} sx={{
                        height: '100%',
                        overflow: 'hidden'
                    }} spacing={3}>

                        <Grid container size={12} spacing={3} sx={{
                            flexGrow: 1,
                            

                            [theme.breakpoints.up('sm')]: {
                                // height:"110px",

                            },
                        }}>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ bgcolor: '#FFFFFF', borderRadius: "16px", height: "351px",}} >
                                <Box >
                                    <Stack flexDirection="row" rowspacing={3} alignItems="center" sx={{borderBottom:"1px solid #F3F4F6", p:3, }} >
                                        <Typography component="span" sx={{ mr:1,  fontWeight: '600', fontSize: "16px", fontFamily: 'Manrope', lineHeight: "21.86px", }}>Ongoing projects</Typography>
                                        <Typography component="span" sx={{
                                            fontSize: 11, textAlign: 'center', p: .5, bgcolor: '#F3F4F6', borderRadius: '14px', px: .3
                                            , py: .2
                                        }}>{ongoingTask.length}</Typography>
                                    </Stack>


                                    {
                                        ongoingTask.map((item, index)=> (
                                            <Stack     onClick={() => handleView()  }  key={index} direction="row" alignItems="center"  justifyContent="space-between" sx={{border:"1px solid #F3F4F6", m:2, height:"46px", borderRadius:"6px", p:2}}  >
                                            <Stack direction="row" alignItems="center" columnGap={2} >
                                            <Box component="div"  sx={{height:"16px", width:"16px", borderRadius:"4px",  bgcolor:item.color}} />
                                            <Typography component="span" sx={{   fontWeight: '500', fontSize: "14px", fontFamily: 'Manrope', lineHeight: "22.86px", }}>{item.name}</Typography>
                                            
                                            </Stack>
                                            <KeyboardArrowRightIcon  sx={{fontSize:'25px', color:'#AEB3C1'}} />
                                            </Stack>
                                          
                                        ))
                                    }
                                    

                                   



                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ bgcolor: '#FFFFFF', borderRadius: "16px", height: "351px",}} >
                                <Box>
                                    <Stack flexDirection="row" rowspacing={3} alignItems="center" sx={{borderBottom:"1px solid #F3F4F6", p:3, }} >
                                        <Typography component="span" sx={{ mr:1,  fontWeight: '600', fontSize: "16px", fontFamily: 'Manrope', lineHeight: "21.86px", }}>Completed projects</Typography>
                                        <Typography component="span" sx={{
                                            fontSize: 11, textAlign: 'center', p: .5, bgcolor: '#F3F4F6', borderRadius: '14px', px: .3
                                            , py: .2
                                        }}>{completeTask.length}</Typography>
                                    </Stack>
                                    {
                                        completeTask.map((item, index)=> (
                                            <Stack  key={index} direction="row" alignItems="center"  justifyContent="space-between" sx={{border:"1px solid #F3F4F6", m:2, height:"46px", borderRadius:"6px", p:2}}  >
                                            <Stack direction="row" alignItems="center" columnGap={2} >
                                            <Box component="div"  sx={{height:"16px", width:"16px", borderRadius:"4px",  bgcolor:item.color}} />
                                            <Typography component="span" sx={{   fontWeight: '500', fontSize: "14px", fontFamily: 'Manrope', lineHeight: "22.86px", }}>{item.name}</Typography>
                                            
                                            </Stack>
                                            <KeyboardArrowRightIcon  sx={{fontSize:'25px', color:'#AEB3C1'}} />
                                            </Stack>
                                          
                                        ))
                                    }

                                </Box>
                            </Grid>
                            
                        </Grid>








                        <Grid size={12} sx={{
                            display: 'flex',        // Ensures it uses flexbox behavior
                            flexDirection: 'column', // Ensures the stack and EmptyContainer will stack vertically
                            height: '100%',
                            flexGrow: 1,
                            position: 'relative',
                            bgcolor: '#fff',
                            borderRadius: 1,
                            px: 2,
                            py: 5

                        }}>




                            <Stack sx={{ justifyContent: 'space-between', }} flexDirection="row" >

                                <Stack flexDirection="row" rowspacing={3} alignItems="center" >
                                    <Typography component="span" sx={{ mr: 1, fontWeight: '600', fontSize: "16px", fontFamily: 'Manrope', lineHeight: "21.86px", }}>All users</Typography>
                                    <Typography component="span" sx={{
                                        fontSize: 11, textAlign: 'center', p: .5, bgcolor: '#F3F4F6', borderRadius: '14px', px: .3
                                        , py: .2
                                    }}>{rows.length}</Typography>
                                </Stack>
                                <Typography sx={{ textDecoration: 'underline', color: '#415BE7', lineHeight: '22.40px', fontFamily: 'Manrope', fontSize: "14px" }}>
                                    View all
                                </Typography>
                            </Stack>


                            <UserTable />

                        </Grid>


                    </Grid>










                    <Grid size={{ xs: 12, sm: 12, md: 4 }} sx={{
                        bgcolor: "#fff",
                        borderRadius: 2,
                        py: 5,
                        height: "100%",
                        px: 2,
                        flexFlow: 1
                    }} >
                        <Stack sx={{ justifyContent: 'space-between', borderBottom: '1px solid #F3F4F6', pb: 3, alignItems: 'center' }} flexDirection="row" >
                            <Stack flexDirection="row" columnGap={"10px"} sx={{
                                alignItems: 'center',
                            }} >

                                <Typography component="span" sx={{ fontWeight: '700', fontSize: 16, color: '#263446', lineHeight: '21.86px', fontFamily: 'Manrope' }}> Recent activities</Typography>
                                <Typography component="span" sx={{ bgcolor: '#F3F4F6', borderRadius: '14px', px: .2, py: .2 }}>0</Typography>
                            </Stack>
                            <Typography sx={{ textDecoration: 'underline', color: '#415BE7', lineHeight: '22.40px', fontFamily: 'Manrope', fontSize: "14px" }}>
                                View all
                            </Typography>

                        </Stack>

                        {
                            recentativities.map((item, index) => (


                                <Box key={index} sx={{
                                    borderBottom: '1px solid #F3F4F6', pb: 2
                                }} >
                                    <Stack sx={{ mt: 2 }} justifyContent="space-between" flexDirection="row">

                                        <Typography component="span" sx={{ bgcolor: '#F3F4F6', borderRadius: '14px', px: .4, py: .3, fontSize: "9px", fontWeight: '400', lineHeight: '14.4px', }}>{item.action}</Typography>
                                        <Typography component="span" sx={{ color: '#263446', fontSize: "12px", lineHeight: "19.2px", fontWeight: '400', }}>{item.time}</Typography>
                                    </Stack>
                                    <Stack sx={{ mt: 2 }} flexDirection="row" columnGap={2}>
                                        <Box
                                            component="img"
                                            src={item.imgSrc}
                                            alt="Description of the image"
                                            sx={{ width: '24px', height: '24px', }} // Example styles
                                        />
                                        <Typography component="span" sx={{ color: '#263446', fontSize: "14px", lineHeight: "22.4px", fontWeight: '500', width: '70%' }}>{item.message}</Typography>
                                    </Stack>


                                    <Typography sx={{ textDecoration: 'underline', lineHeight: '22.40px', fontFamily: 'Manrope', fontSize: "14px", textAlign: 'right' }}>
                                        View
                                    </Typography>
                                </Box>

                            ))
                        }






                    </Grid>


                </Grid>


            </Container>

        </>

    );
}
