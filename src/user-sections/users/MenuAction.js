// MenuAction.js
import React from 'react';
import { Menu, MenuItem } from '@mui/material';

const MenuAction = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      sx={{left:10}}
    >
      <MenuItem sx={{fontSize:'13px', fontFamily:'Manrope', fontWeight:'400', lineHeight:'20.8px'}} onClick={handleClose}>View details</MenuItem>
      <MenuItem sx={{fontSize:'13px', fontFamily:'Manrope', fontWeight:'400', lineHeight:'20.8px'}} onClick={handleClose}>Edit profile</MenuItem>
      <MenuItem sx={{fontSize:'13px', fontFamily:'Manrope', fontWeight:'400', lineHeight:'20.8px'}} onClick={handleClose}>Deactivate user</MenuItem>
    </Menu>
  );
};

export default MenuAction;
