import React from 'react';
import { Modal, Box, Typography, TextField, MenuItem, Button, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { good } from '../../../_mock/image';


const CustomerModal = ({ modalType, open, handleClose, sx }: any) => {

  // Function to return different modal heights based on the type
  const getModalHeight = () => {
    switch (modalType) {
      case 'add':
        return '500px';
      case 'onboard-manager':
        return '75%';
      case 'view':
        return '300px';
      case 'update':
        return '450px';
      default:
        return 'auto';
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    height: getModalHeight(),  // Set dynamic height based on modalType
    overflowY: 'auto',  // Add scrolling for overflow content
    ...sx
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'add':
        return (
          <>
            <Stack spacing={5} sx={{ pb: 3 }}>
              <Typography variant="h4" sx={{ mb: 3 }} >Create branch</Typography>

              <Stack spacing={1}>
                <Typography variant="h6" >Branch name</Typography>
                <TextField fullWidth placeholder="Enter branch name" margin="normal" />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h6" >Country</Typography>
                <TextField fullWidth select placeholder="Select country" margin="normal">
                  <MenuItem value="regular">Regular</MenuItem>
                  <MenuItem value="vip">VIP</MenuItem>
                </TextField>
              </Stack>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                sx={{
                  my: 3,
                  borderRadius: 1,
                  backgroundColor: '#AEB3C1',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#9AA1B0',
                  },
                }}
              >
                Create branch
              </LoadingButton>
            </Stack>
          </>
        );
      case 'onboard-manager':
        return (
          <>
            <Stack spacing={5} sx={{ pb: 3 }}>
              <Typography variant="h4" sx={{ mb: 3 }} >Onboard manager</Typography>
              <Stack spacing={1}>
                <Typography variant="h6" >Fullname</Typography>
                <TextField fullWidth placeholder="Enter the manager’s full name" margin="normal" />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h6" >Email</Typography>
                <TextField fullWidth placeholder="Enter the manager’s email" margin="normal" />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h6" >Branch</Typography>
                <TextField fullWidth select placeholder="Select branch" margin="normal">
                  <MenuItem value="regular">Regular</MenuItem>
                  <MenuItem value="vip">VIP</MenuItem>
                </TextField>
              </Stack>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                sx={{
                  my: 3,
                  borderRadius: 1,
                  backgroundColor: '#AEB3C1',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#9AA1B0',
                  },
                }}
              >
                Onboard Manager
              </LoadingButton>
            </Stack>
          </>
        );
      case 'view':
        return (
          <>
            <Typography variant="h6" component="h2">Customer Details</Typography>
            <Typography>Name: John Doe</Typography>
            <Typography>Email: john@example.com</Typography>
            <Typography>Phone: (123) 456-7890</Typography>
            <Typography>Address: 123 Main St</Typography>
            <Typography>Customer Type: VIP</Typography>
            <Button variant="outlined" color="primary" fullWidth onClick={handleClose}>Close</Button>
          </>
        );
      case 'update':
        return (
          <>
            <Typography variant="h6" component="h2">Update Customer Information</Typography>
            <TextField fullWidth label="Name" margin="normal" defaultValue="John Doe" />
            <TextField fullWidth label="Email" margin="normal" defaultValue="john@example.com" />
            <TextField fullWidth label="Phone Number" margin="normal" defaultValue="(123) 456-7890" />
            <TextField fullWidth label="Address" margin="normal" defaultValue="123 Main St" />
            <TextField fullWidth select label="Customer Type" margin="normal" defaultValue="vip">
              <MenuItem value="regular">Regular</MenuItem>
              <MenuItem value="vip">VIP</MenuItem>
            </TextField>
            <Button variant="contained" color="primary" fullWidth onClick={handleClose}>Update</Button>
          </>
        );
      case 'success-onboarding':
        return (
          <Stack sx={{p:5}}>
            <Box
            alignSelf="center"
              component="img"
              src={good}
              alt="Description of the image"
              sx={{ width: '73.33px', height: '73.33px', borderRadius: 2 , }} // Example styles
            />
            <Typography sx={{ fontFamily:'Manrope', fontSize:20, lineHeight:"30px", fontWeight:'600', mt:2}} textAlign="center" >User onboarded successfully</Typography>

            <Typography sx={{ fontFamily:'Manrope', fontSize:14, lineHeight:"24px", fontWeight:'400', mt:2,}} textAlign="center" >An email containing the user’s username and password has been sent to “deborahamakiri01@gmail.com”</Typography>

               <LoadingButton  sx={{bgcolor:'#415BE7', color:'#fff', borderRadius:1, height:"52px",mt:6 }}>
               Continue
                </LoadingButton>
                <Typography sx={{ fontFamily:'Manrope', fontSize:15, lineHeight:"24px", fontWeight:'500', mt:3, color:'#263446'}} textAlign="center" >Resend email (59 s)</Typography>
          </Stack>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      sx={{ bgcolor: 'rgba(38, 52, 70, 0.15)', width:'100%' }} open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {renderModalContent()}
      </Box>
    </Modal>
  );
};

export default CustomerModal;
{/* <Button variant="contained" color="primary" fullWidth onClick={handleClose}>Update</Button> */}
