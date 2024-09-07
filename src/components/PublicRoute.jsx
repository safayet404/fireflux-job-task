import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { user,loggedIn, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; 

  return loggedIn ? <Navigate to="/product" /> : children;
};

export default PublicRoute;
