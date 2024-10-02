import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Typography, Button } from '@mui/material';




import Searchbar from './common/searchbar';
import CustomerModal from './common/modal';
import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import DropdownMenu from './common/DropdownMenu';
import LanguagePopover from './common/language-popover';
import NotificationsPopover from './common/notifications-popover';
import { useResponsive } from '../../hooks/use-responsive';
import { bgBlur } from '../../theme/css';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };

  const handleCloseModel = () => {
    setOpen(false);
    setModalType('');
  };
  // 604px



  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Typography variant="h4" sx={{

        color: '#263446',
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'block', // Height for small screens and up
        },
      }} > Task Manager</Typography>

      <Searchbar />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>

        <Button


          sx={{
            bgcolor: "#415BE7", color: "#FFFFFF", fontSize: "9px", fontWeight: "400", fontFamily: "Manrope",
            [theme.breakpoints.up('sm')]: {
              fontSize: "13px",
              fontWeight: "500", // Height for small screens and up
            },
          }}
          onClick={() => handleOpen('add')}
        >
          Create Branch
        </Button>
        <DropdownMenu handleOpen={handleOpen} />
        <NotificationsPopover />

        <CustomerModal modalType={modalType} open={open} handleClose={handleCloseModel} sx={{
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: 600, // Height for small screens and up
          },
        }} />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        bgcolor: "red",

        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          // width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          width: `100%`,

          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
          borderBottom: "1px solid #F3F4F6"
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
