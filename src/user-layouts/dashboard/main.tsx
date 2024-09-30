import PropTypes from 'prop-types';

import Box from '@mui/material/Box';


import { NAV, HEADER } from './config-layout';
import { useResponsive } from '../../hooks/use-responsive';

// ----------------------------------------------------------------------


export default function Main({ children, sx, ...other }:any) {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        bgcolor:'#FAFAFA',
        py: `${HEADER.H_MOBILE }px`,
        ...(lgUp && {
          // px: 2,
          py: `${HEADER.H_DESKTOP}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
