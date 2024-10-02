import { Container, Stack, Typography, Button } from '@mui/material';
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
    const theme = useTheme();

    return (
        <>
            {/* Header */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    bgcolor: '#fff',
                    width: '100%',
                    height: '64px',
                    px: 3,
                    borderBottom: '1px solid #F3F4F6',
                }}
            >
                <Typography
                    component="span"
                    sx={{
                        fontFamily: 'Manrope',
                        fontWeight: 700,
                        fontSize: { xs: '15px', sm: '20px' }, // Adjust font size for small and larger screens
                    }}
                >
                    Analytics
                </Typography>
            </Stack>

            {/* Main Container */}
            <Container maxWidth="xl" sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    {/* Projects Section */}
                    <Grid container item xs={12} spacing={2}>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            sx={{
                                bgcolor: '#fff',
                                height: { xs: 'auto', sm: '199px' }, // Responsive height
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 2,
                            }}
                        >
                            <TextCustom name="Projects" />
                            <ProjectProgressDashboard />
                        </Grid>
                    </Grid>

                    {/* Users Section */}
                    <Grid container item size={{ xs: 12 }} spacing={2}>
                        <Grid
                            item
                            size={{ xs: 12, sm: 8 }}

                            sx={{
                                bgcolor: '#fff',
                                p: 2,
                                borderRadius: 2,
                                height: { xs: 'auto', sm: '449px' }, // Responsive height
                            }}
                        >
                            <TextCustom name="Users" />
                            <ActiveUsersChart />
                        </Grid>
                        <Grid container item xs={12} sm={4} spacing={2}>
                            <Grid
                                item
                                size={{ xs: 12, sm: 8 }}

                                sx={{
                                    bgcolor: '#fff',
                                    p: 2,
                                    borderRadius: 2,
                                    height: { xs: 'auto', sm: '50%' }, // Make sure it adjusts for smaller screens
                                }}
                            >
                                <TextCustom name="Users" />
                                <Allusers />
                            </Grid>
                            <Grid
                                item
                                size={{ xs: 12, sm: 8 }}

                                sx={{
                                    bgcolor: '#fff',
                                    p: 2,
                                    borderRadius: 2,
                                    height: { xs: 'auto', sm: '50%' },
                                    display: 'flex', // Enable flexbox
                                    display: 'flex', // Enable flexbox
                                    flexDirection: 'column',


                                }}
                            >
                                <TextCustom name="Active users" />
                                <Activeusers />
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Tasks Section */}
                    <Grid container item size={{ xs: 12, }} spacing={2}>
                        <Grid container item xs={12} sm={9} spacing={2}>
                            <Grid
                                item
                                size={{ xs: 12, sm: 4 }}

                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    bgcolor: '#fff',
                                    height: { xs: 'auto', sm: '257px' }, // Responsive height
                                    p: 2,
                                    borderRadius: 2,
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', // Ensure content is centered
                                    mb: { xs: 2, sm: 0 }, // Add margin for spacing in smaller screens
                                }}
                            >
                                <TextCustom name="Tasks" />
                                <Stack
                                    sx={{
                                        width: '144px',
                                        height: '100px',
                                        bgcolor: '#F3F4F6',
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
                                            fontFamily: 'Manrope',
                                            fontWeight: 700,
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
                                            fontFamily: 'Manrope',
                                            color: '#F9FAFB',
                                            borderRadius: 0,
                                            height: 45,
                                            width: '100%',
                                        }}
                                    >
                                        All task assigned
                                    </Button>
                                </Stack>
                            </Grid>

                            <Grid
                                item

                                size={{ xs: 12, sm: 4 }}
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    bgcolor: '#fff',
                                    height: { xs: 'auto', sm: '257px' },
                                    p: 2,
                                    borderRadius: 2,
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', // Ensure content is centered
                                    mb: { xs: 2, sm: 0 }, // Add margin for spacing in smaller screens
                                }}
                            >
                                <TextCustom name="Tasks completed" />
                                <Stack
                                    sx={{
                                        width: '144px',
                                        height: '100px',
                                        bgcolor: '#F3F4F6',
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
                                            fontFamily: 'Manrope',
                                            fontWeight: 700,
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
                                            fontFamily: 'Manrope',
                                            color: '#F9FAFB',
                                            borderRadius: 0,
                                            height: 45,
                                            width: '100%',
                                        }}
                                    >
                                        All task completed
                                    </Button>
                                </Stack>
                            </Grid>

                            <Grid
                                item
                                size={{ xs: 12, sm: 4 }}

                                sx={{
                                    bgcolor: '#fff',
                                    height: { xs: 'auto', sm: '257px' },
                                    p: 2,
                                    borderRadius: 2,
                                }}
                            >
                                <TaskCompletionChart />
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            size={{ xs: 12, sm: 3 }}

                            sx={{
                                bgcolor: '#fff',
                                height: { xs: 'auto', sm: '257px' },
                                p: 2,
                                borderRadius: 2,
                            }}
                        >
                            <TaskDistributionChart />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}