// src/components/RouterLink.js
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLinks } from 'react-router-dom';

// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ href, ...other }, ref) => (
  <RouterLinks ref={ref} to={href} {...other} />
));

RouterLink.propTypes = {
  href: PropTypes.string,
};

export default RouterLink;
