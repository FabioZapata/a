import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';


import { SESSION_USER_LOCAL_KEY } from '../config/constants';

export const AuthContext = createContext();


function AuthProvider({ children }) {
  const userLocalStorage = localStorage.getItem(SESSION_USER_LOCAL_KEY);
  const [sessionUser, setSessionUser] = useState(
    userLocalStorage ? JSON.parse(userLocalStorage) : null,
  );

  const setSessionUserData = (data) => {
    localStorage.setItem(SESSION_USER_LOCAL_KEY, JSON.stringify(data));
    setSessionUser(data);
  };

  const removeAuthToken = () => {
    localStorage.removeItem(SESSION_USER_LOCAL_KEY);
    setSessionUser(null);
  };

  const isAuth = () => localStorage.getItem(SESSION_USER_LOCAL_KEY);

  return (
    <AuthContext.Provider
      value={{
        setSessionUserData,
        removeAuthToken,
        isAuth,
        sessionUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;