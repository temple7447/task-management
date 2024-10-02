// src/components/Logo.js
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { Link as MuiLink } from '@mui/material';
import { RouterLink } from '../../routes/components';
// Import the reusable RouterLink

// ----------------------------------------------------------------------

const Logo = forwardRef(({ useImportedLogo = false, disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: '100%',
        display: 'inline-flex',
        backgroundColor: '#fff',
        height: 64,
         marginBottom:10,
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        src="/asset/logo.png" // Adjust path as needed
        sx={{ width: '100%', height: '100%', cursor: 'pointer' }}
      />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <MuiLink
    component={RouterLink}
    to="/" // Use 'to' instead of 'href' for react-router-dom
    sx={{ display: 'contents' }}
  >
    {logo}
  </MuiLink>
  );
});

Logo.propTypes = {
  useImportedLogo: PropTypes.any,
  disabledLink: PropTypes.any,
  sx: PropTypes.any,
};

export default Logo;
