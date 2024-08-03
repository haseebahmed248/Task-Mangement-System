import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PublicRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/users/home', {
          withCredentials: true
        });
        if (res.data.authenticated === true) {
          setIsAuthenticated(true);
          navigate('/dashboard');
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error('Auth check error:', err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? null : <Outlet />;
};

export default PublicRoute;