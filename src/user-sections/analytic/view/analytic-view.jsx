
import { Container, Stack, Typography, Button, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/material/styles';
import ActiveUsersChart from '../components/bar-chart';
import TaskDistributionChart from '../components/task-distribution';
import ProjectProgressDashboard from '../components/project-chart';
import Allusers from '../components/all-user';
import Activeusers from '../components/active-user';
import TaskCompletionChart from '../components/complete-rate';
import TextCustom from '../components/text';

// ----------------------------------------------------------------------

export default function AnalyticView() {

    const theme = useTheme()

    return (
        <>
            <Stack direction="row" columnGap={1} justifyContent="space-between" alignItems="center" sx={{ bgcolor: '#fff', width: '100%', height: '64px', px: 3, borderBottom: "1px solid #F3F4F6" }} >
                <Typography component="span" sx={{
                    fontFamily: 'Manrope', fontWeight: '700', fontSize: "15px", lineHeight: '27.32px',
                    [theme.breakpoints.up('sm')]: {
                        fontSize: "20px",

                    },
                }}>
                    Analytics
                </Typography>



            </Stack>


            <Container maxWidth="xl" sx={{ p: 2 }}>

                <Grid container size={12} spacing={2}>

                    <Grid container size={12} sx={{
                        height: 302,
                        [theme.breakpoints.up('sm')]: {
                            height: 199, // Height for small screens and up
                        },

                    }} >
                        <Grid size={{ xs: 12, sm: 6 }} sx={{ bgcolor: '#fff', height: "100%" }}>

                            <TextCustom name="Projects" />

                        </Grid>
                        <Grid alignSelf={'center'} li size={{ xs: 12, sm: 6 }} sx={{ bgcolor: '#fff', height: "100%", p: 2, borderRadius: 2, }}>

                            <TextCustom name="Projects" />
                            <ProjectProgressDashboard />
                        </Grid>

                    </Grid>

                    <Grid container size={12} sx={{
                        height: 276,
                        [theme.breakpoints.up('sm')]: {
                            height: 449, // Height for small screens and up
                        },

                    }}>


                        <Grid justifyContent={"center"} alignSelf={"center"} alignItems={"center"} size={{ xs: 12, sm: 8 }} sx={{ bgcolor: '#FFFFFF', p: 2, borderRadius: 2, height: '100%' }}>
                            <TextCustom name="Users" />
                            <ActiveUsersChart />
                        </Grid>




                        <Grid container size={{ xs: 12, sm: 4 }} sx={{ height: "100%" }} spacing={3}>
                            <Grid size={12} sx={{ bgcolor: '#fff', height: "45%", p: 2, borderRadius: 2, }}>

                                <TextCustom name="Users" />
                                <Allusers />
                            </Grid>
                            <Grid size={12} sx={{ bgcolor: '#fff', height: "45%", p: 2, borderRadius: 2, }}>

                                <TextCustom name="Active users" />
                                <Activeusers />
                            </Grid>
                        </Grid>

                    </Grid>


                    <Grid container size={12} sx={{
                        height: 233,
                        [theme.breakpoints.up('sm')]: {
                            height: 257, // Height for small screens and up
                        },

                    }}>
                        <Grid container size={{ xs: 12, sm: 9 }} sx={{ height: "100%" }} spacing={2}>
                            <Grid container size={{ xs: 12, sm: 4 }} justifyContent="center" alignItems="center" sx={{ bgcolor: '#fff', height: "100%", p: 2, borderRadius: 2, position: 'relative' }}>
                                {/* Tasks Text Positioned at the Top-Left */}

                                <TextCustom name="Tasks" />

                                {/* Centered Stack Component */}
                                <Stack
                                    alignSelf="center"
                                    sx={{
                                        width: "144px",
                                        height: "100px",
                                        bgcolor: "#F3F4F6",
                                        borderRadius: 0.4,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    spacing={2}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 24.31,
                                            fontFamily: "Manrope",
                                            lineHeight: "38.9px",
                                            fontWeight: "700",
                                            textAlign: 'center',
                                            pt: 3,
                                        }}
                                    >
                                        44
                                    </Typography>

                                    <Button
                                        sx={{
                                            bgcolor: '#415BE7',
                                            fontSize: 13,
                                            fontWeight: "400",
                                            fontFamily: "Manrope",
                                            lineHeight: "20.8px",
                                            color: "#F9FAFB",
                                            borderRadius: 0,
                                            height: 45,
                                            width: "100%"
                                        }}
                                    >
                                        All task assigned
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid container size={{ xs: 12, sm: 4 }} justifyContent="center" alignItems="center" sx={{ bgcolor: '#fff', height: "100%", p: 2, borderRadius: 2, position: 'relative' }}>
                                {/* Tasks Text Positioned at the Top-Left */}

                                <TextCustom name="Tasks completed" />

                                {/* Centered Stack Component */}
                                <Stack
                                    alignSelf="center"
                                    sx={{
                                        width: "144px",
                                        height: "100px",
                                        bgcolor: "#F3F4F6",
                                        borderRadius: 0.4,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    spacing={2}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 24.31,
                                            fontFamily: "Manrope",
                                            lineHeight: "38.9px",
                                            fontWeight: "700",
                                            textAlign: 'center',
                                            pt: 3,
                                        }}
                                    >
                                        44
                                    </Typography>

                                    <Button
                                        sx={{
                                            bgcolor: '#46B988',
                                            fontSize: 13,
                                            fontWeight: "400",
                                            fontFamily: "Manrope",
                                            lineHeight: "20.8px",
                                            color: "#F9FAFB",
                                            borderRadius: 0,
                                            height: 45,
                                            width: "100%"
                                        }}
                                    >
                                        All task completed
                                    </Button>
                                </Stack>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 4 }} sx={{ bgcolor: '#fff', height: "100%", p: 2, borderRadius: 2, }}>

                                <TaskCompletionChart />
                            </Grid>
                        </Grid>
                        <Grid container size={{ xs: 12, sm: 3 }} sx={{ bgcolor: '#fff', height: "100%", p: 2, borderRadius: 2, }}>

                            <TaskDistributionChart />
                        </Grid>
                    </Grid>





                </Grid>








            </Container >
        </>
    );

}

