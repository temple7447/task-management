import React, { useState, MouseEvent } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import { PersonOutline, AdminPanelSettings, Group ,} from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



interface DropdownMenuProps {
  handleOpen: (value: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ handleOpen }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { icon: <AdminPanelSettings fontSize="small" />, text: "Onboard admin", action: () => { handleOpen("success-onboarding"); handleClose(); } },
    { icon: <PersonOutline fontSize="small" />, text: "Onboard manager ", action: handleClose },
    { icon: <Group fontSize="small" />, text: "Onboard other roles", action: handleClose },
  ];

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
        endIcon={<KeyboardArrowUpIcon />}
        sx={{
          textTransform: 'capitalize',
          bgcolor: '#F9FAFB',
          color: 'text.primary',
          borderRadius: 1,
          boxShadow: 'none',
          px: 2.5,
          py: 1.25,
          fontSize: '0.875rem',
          fontFamily:'Manrope',
          fontWeight:"500"
          // '&:hover': {
          //   bgcolor: 'action.hover',
          // },
        }}
      >
        Onboard
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              mt: 1.5,
              borderRadius: 1,
              bgcolor:'#F9FAFB',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={item.action} sx={{ py: 1, px: 2, bgcolor:"#fff", m:1, borderRadius:.5 }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Typography variant="body2">{item.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownMenu;