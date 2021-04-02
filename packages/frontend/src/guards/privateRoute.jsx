
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthProvider';
import { PRIVATE_REDIRECT } from '../config/constants';

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  if (isAuth()) {
    return children;
  }
  return <Redirect to={PRIVATE_REDIRECT} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;