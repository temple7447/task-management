// UserRow.js
import React, { useState } from 'react';
import { TableRow, TableCell, Checkbox, IconButton, Avatar , Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuAction from './MenuAction'; // Import the action menu
import profilenot from '../../assets/svg/profilenot.svg'
import AvatarList from '../../components/Avater/overlap';
import { useRouter } from '../../routes/hooks';
const UserRow = ({ row }) => {
  const [anchorEl, setAnchorEl] = useState(null);
const router = useRouter()
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    router.push('/projects/projectdetailbranch')
    setAnchorEl(null);
  };

  return (
    <TableRow hover sx={{
        '&:last-child td, &:last-child th': { border: 0 },
    }}>
      <TableCell padding="checkbox" sx={{ padding: '0px' }}>
        <Checkbox  sx={{ borderRadius:10}} size="small"  />
      </TableCell>
  
      <TableCell    sx={{fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px',}}>
      <Stack flexDirection="row" sx={{}}>
      <Avatar src={profilenot} alt={row.name} sx={{ marginRight: '8px', width:"23px", height: "23px",  borderRadius:"10px"}} /> 
      {row.name}
    </Stack>

    </TableCell>

      <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>{row.email}</TableCell>
      <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>{row.branch}</TableCell>
      <TableCell  sx={{ }} >
      <Stack justifyContent={"flex-start"} alignSelf={"flex-end"} sx={{bgcolor:'red', }}>
      <AvatarList height="20px"  width="20px" />
      </Stack>
      </TableCell>
      <TableCell sx={{ fontSize:"12px", fontWeight:'500', fontFamily:'Manrope', lineHeight:'22.4px'}}>{row.role}</TableCell>
      <TableCell>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <MenuAction anchorEl={anchorEl} handleClose={handleMenuClose} />
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
