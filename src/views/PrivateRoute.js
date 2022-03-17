import React from 'react';
import { BrowserRouter as Navigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuthContext();
  return currentUser ? children : <Navigate to="/" />;
};
