import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { ListItemButton, ListItemIcon, ListItemText, List } from '@mui/material';


// import Logo from 'src/components/logo';

import { NAV } from './config-layout';
import { navConfig, navConfigNext } from './config-navigation';
import { usePathname } from '../../routes/hooks';
import { RouterLink } from '../../routes/components';
import Scrollbar from '../../components/scrollbar';
import { account } from '../../_mock/account';
import { useResponsive } from '../../hooks/use-responsive';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  const theme = useTheme();
  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  const renderAccount = (
    <Box
      sx={{
        my: 3,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
      }}
    >
      <Avatar src={account.photoURL} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography sx={{ color: "#263446", fontSize: 14, fontWeight: "500", fontFamily: "Manrope", lineHeight: "22.4px" }} > {account.displayName}</Typography>

        <Typography sx={{ color: "#808898", fontSize: 12, fontWeight: "500", fontFamily: "Manrope", lineHeight: "19.2px" }}>
          tobiawokunle@gmail.com
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (

    <Stack component="nav" spacing={0.5} sx={{
      px: 2,
      mt: 2,
      [theme.breakpoints.up('md')]: {
        mt: 9  // Height for small screens and up
      },


    }}>
      {navConfig.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}



    </Stack>
  );
  const renderMenutwo = (

    <Stack component="nav" spacing={0.5} sx={{
      px: 2,
      mt: 2,
      [theme.breakpoints.up('md')]: {
        mt: 9  // Height for small screens and up
      },


    }}>


      {navConfigNext.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}


    </Stack>
  );


  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',

        },
      }}
    >
      {/* <Logo sx={{ mt: 3, ml: 4 }} /> */}

      <Typography sx={{

        color: '#263446',
        display: 'block',
        mt: 3,
        fontSize: "20px",
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: '27.32px',
        fontFamily: 'Manrope',
        [theme.breakpoints.up('md')]: {
          display: 'none', // Height for small screens and up
        },
      }} > Task Manager</Typography>

      {renderMenu}

      <Box sx={{ flexGrow: 6, my: 5 }} />
      {renderMenutwo}

      {renderAccount}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      to={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        fontFamily: 'Manrope',
        fontSize: 14,
        lineHeight: '22.4px',
        color: '#636872',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: '#263446',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: "#F3F4F6",
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box
        component="img"
        src={item.icon}
        alt="Description of the image"
        sx={{ width: 24, height: 24, alignSelf: 'center', mr: 1 }} // Example styles
      />


      <Box component="span" sx={{}} >{item.title} </Box>

    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
