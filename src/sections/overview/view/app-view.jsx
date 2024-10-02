import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Typography, Stack, Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import numbranch from '../../../assets/svg/numbranch.svg'
import ongoing from '../../../assets/svg/numongoin.svg'
import complete from '../../../assets/svg/numcompleterate.svg'

import EmptyContainer from '../app-empty';
import UserTable from '../UserTable';
import { rows } from '../../../_mock/user';
import { recentativities } from '../../../_mock/account';


// ----------------------------------------------------------------------
// sm={6} md={8}

// direction="row"
// justifyContent="space-around"
// alignItems="center"
// sx={{ p: 3, borderRadius: 2 }}
// <EmptyContainer />


export default function AppView() {

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
      <Grid container spacing={3} sx={{ height: '855px' }}>

        <Grid container size={{ xs: 12, sm: 12, md: 8 }} sx={{
          height: '100%',
          overflow: 'hidden'
        }} spacing={3}>

          <Grid container size={12} spacing={{}} sx={{
            bgcolor: '#FFFFFF',
            flexGrow: 1,
            borderRadius: 2,
            p: 3,

            [theme.breakpoints.up('sm')]: {
              // height:"110px",

            },
          }}>
            <Grid item size={{ xs: 6, sm: 6, md: 4 }}  >
              <Box component="div" flexDirection="row" sx={{}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2, }}>
                  <Box
                    component="img"
                    src={numbranch}
                    alt="Description of the image"
                    sx={{ width: '18px', height: '18px', alignSelf: 'center', top: 10, mr: 1 }} // Example styles
                  />
                  <Typography sx={{ lineHeight: "20.8px", color: '#808898', fontSize: 13, fontFamily: 'Manrope', fontWeight: '500' }}  >   NUMBER OF BRANCHES</Typography>
                </Box>
                <Box component="div" sx={{ ml: "24px", }}>

                  <Typography sx={{ lineHeight: "22.4px", color: '#263446', fontSize: 24, fontFamily: 'Manrope', fontWeight: '700' }} component="span">0 </Typography>
                  <Typography sx={{ lineHeight: "22.4px", color: '#263446', fontSize: 14, fontFamily: 'Manrope', fontWeight: '500' }} component="span"> in total</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item size={{ xs: 6, sm: 6, md: 4 }}  >
              <Box component="div" flexDirection="row" sx={{}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2, }}>
                  <Box
                    component="img"
                    src={ongoing}
                    alt="Description of the image"
                    sx={{ width: '18px', height: '18px', alignSelf: 'center', top: 10, mr: 1 }} // Example styles
                  />
                  <Typography sx={{ lineHeight: "20.8px", color: '#808898', fontSize: 13, fontFamily: 'Manrope', fontWeight: '500' }}  >ONGOING PROJECTS</Typography>
                </Box>
                <Box component="div" sx={{ ml: "24px", }}>

                  <Typography sx={{ lineHeight: "22.4px", color: '#263446', fontSize: 24, fontFamily: 'Manrope', fontWeight: '700' }} component="span">0 </Typography>
                  <Typography sx={{ lineHeight: "22.4px", color: '#263446', fontSize: 14, fontFamily: 'Manrope', fontWeight: '500' }} component="span"> in total</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item size={{ xs: 6, sm: 6, md: 4 }}  >
              <Box component="div" flexDirection="row" sx={{}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 2, }}>
                  <Box
                    component="img"
                    src={complete}
                    alt="Description of the image"
                    sx={{ width: '18px', height: '18px', alignSelf: 'center', top: 10, mr: 1 }} // Example styles
                  />
                  <Typography sx={{ lineHeight: "20.8px", color: '#808898', fontSize: 13, fontFamily: 'Manrope', fontWeight: '500' }}  >COMPLETION RATE </Typography>
                </Box>
                <Box component="div" sx={{ ml: "24px", }}>
                  <Typography sx={{ lineHeight: "22.4px", color: '#263446', fontSize: 24, fontFamily: 'Manrope', fontWeight: '700' }} component="span">0</Typography>
                  <Typography sx={{ lineHeight: "22.4px", color: '#263446', fontSize: 14, fontFamily: 'Manrope', fontWeight: '500' }} component="span">%</Typography>
                </Box>
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

                  <Typography component="span" sx={{ bgcolor: '#F3F4F6', borderRadius: '14px', px: .2, py: .2, fontSize: "9px", fontWeight: '400', lineHeight: '14.4px', }}>{item.action}</Typography>
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
  );
}
