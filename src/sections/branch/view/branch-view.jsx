import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Stack, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { lovewordbranches } from '../../../_mock/account';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from '../../../routes/hooks';
// import AppTasks from '../app-tasks';
// import AppNewsUpdate from '../app-news-update';
// import AppOrderTimeline from '../app-order-timeline';
// import AppCurrentVisits from '../app-current-visits';
// import AppWebsiteVisits from '../app-website-visits';
// import AppWidgetSummary from '../app-widget-summary';
// import AppCurrentSubject from '../app-current-subject';
// import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function BranchView() {
  const router = useRouter();

  const theme = useTheme();
  const handleView = (branchName) => {
    console.log(`Viewing ${branchName}`);
    router.push(`/branches/detailbranch`);

    // Implement view functionality here
  };


  return (
    <div>
      <Stack direction="row" columnGap={1} alignItems="center" sx={{ bgcolor: '#fff', width: '100%', height: '64px', px: 3, }} >
        <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '700', fontSize: "20px", lineHeight: '27.32px', }}>
          Branches
        </Typography>
        <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '600', fontSize: "13px", lineHeight: '19.12px', bgcolor: '#F3F4F6', borderRadius: "17px", px: .5 }}>{lovewordbranches.length}</Typography>
      </Stack>
      <Container maxWidth="xl" sx={{
        p: 3
      }}>



     
        <Grid container spacing={2}>
        {lovewordbranches.map((item, index) => (
          <Grid item key={index} size={{xs:12, sm:6, md:6}}>
            <Box
              sx={{
                borderRadius: 2,
                position: 'relative',
                
                overflow: 'hidden',
                height: 214,
                [theme.breakpoints.up('sm')]: {
                  height: 347,// Height for small screens and up
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={`${item.name} studio`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                }}
              />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                }}
              >
                <Stack spacing={1}>
                  <Typography
                    sx={{
                      fontFamily: 'Manrope',
                      fontWeight: 700,
                      fontSize: 20,
                      lineHeight: '27.32px',
                      color: '#FFFFFF',
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOnIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: 'Manrope',
                        fontWeight: 500,
                        fontSize: 16,
                        color: '#FFFFFF',
                      }}
                    >
                      {item.flag} {item.country}
                    </Typography>
                  </Stack>
                </Stack>
                <Button
                  sx={{
                    color: '#FFFFFF',
                    textDecoration: 'underline',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  onClick={()=> handleView(item.country)}
                >
                  View
                </Button>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>

      </Container>
    </div>
  );
}



   //         // <Grid container spacing={3} >  {
        //     lovewordbranches.map((item, index) => {

        //       return (
        //         <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }} flexGrow={1} sx={{ height: "347px"}}>
        //           <Stack sx={{ borderRadius: 2, position: 'relative', height:'auto' }}  flexGrow={1}  >
        //             <Box
        //               component="img"
        //               src={item.image}
        //               alt="loveword branches"
        //               sx={{ borderRadius: 2, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, zIndex: 1, backgroundSize: 'cover', }}

        //             />
        //             <Stack  justifyContent="space-between"   direction="row" alignItems="flex-start"  sx={{ zIndex: 2, p: 4, }}>

        //               <Stack   >
        //                 <Typography sx={{ fontFamily: 'Manrope', fontWeight: '700', fontSize: "20px", lineHeight: '27.32px', color: '#FFFFFF' }}>{item.name}</Typography>
        //                 <Stack alignItems="center" direction='row' spacing={1} sx={{mt:1}}>
        //                   <LocationOnIcon color='#fff' fontSize='medium'   />
        //                   <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: "25px", lineHeight: '20.32px', color: '#FFFFFF', alignItems: 'center' }}>{item.flag}</Typography>
        //                   <Typography component="span" sx={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: "13px", lineHeight: '20.32px', color: '#FFFFFF', alignItems: 'center' }}>{item.country}</Typography>
        //                 </Stack>
        //               </Stack>
        //               <Button sx={{ color: '#FFFFFF', textDecoration: 'underline', textDecorationColor: "#FFFFFF" }} > View</Button>
        //             </Stack>

        //           </Stack>
        //         </Grid>
        //       )
        //     })
        //   }




        // </Grid>
