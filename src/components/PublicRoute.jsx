// PublicRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // Or a loading spinner

  return user ? <Navigate to="/product" /> : children;
};

export default PublicRoute;
