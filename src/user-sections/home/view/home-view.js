import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Typography, Stack, Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import numbranch from '../../../assets/svg/numbranch.svg'
import ongoing from '../../../assets/svg/numongoin.svg'
import complete from '../../../assets/svg/numcompleterate.svg'

// import EmptyContainer from '../app-empty';
import { rows } from '../../../_mock/user';
import { recentativities } from '../../../_mock/account';
import MyTask from '../component/my-task';


// ----------------------------------------------------------------------
// sm={6} md={8}

// direction="row"
// justifyContent="space-around"
// alignItems="center"
// sx={{ p: 3, borderRadius: 2 }}
// <EmptyContainer />


export default function HomeView() {

    const theme = useTheme();


    return (
        <Container maxWidth="xl" sx={{
            flexGrow: 1,
            flex: 1,
            pt: 2
        }} >
            <Typography variant="h4" sx={{ mb: 3 }}>
                Good morning, Tobi <br />

            </Typography>
            <Grid container spacing={2} sx={{}}>

                <Grid container size={12} sx={{
                    overflow: 'hidden',
                    bgcolor: '#fff',
                    height: "349px",
                    borderRadius: 1,
                }} >

                    <Grid size={12} sx={{ pt: 2, px: 2 }}>

                        <Typography sx={{ color: '#263446', lineHeight: '21.40px', fontFamily: 'Manrope', fontSize: "16px" }}>
                            My tasks
                        </Typography>

                    </Grid>
                    <Grid size={12}>
                        <MyTask />
                    </Grid>
                </Grid>










                <Grid container size={12} sx={{
                    height: "351px",
                    flexFlow: 1
                }} spacing={2}   >
                    <Grid size={{ xs: 12, sm: 6, md: 6, }} sx={{
                        bgcolor: { xs: "blue", sm: "black", md: "yellow" },
                        borderRadius: 1,
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
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ bgcolor: 'yellow' }} >
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
                    </Grid>








                </Grid>


            </Grid>


        </Container>
    );
}
