import React, { useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './Context/UserContext';

const ProtectedRoute = () => {
  const { setUser } = useContext(UserContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/users/home', {
          withCredentials: true,
          timeout: 5000 // 5 seconds timeout
        });
        console.log('Auth response:', res.data);
        if (res.data.authenticated === true) {
          setIsAuthenticated(true);
          setUser(res.data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
          navigate('/login');
        }
      } catch (err) {
        console.error('Auth error:', err);
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else if (err.code === 'ECONNABORTED') {
          console.log('Request timed out');
        } else {
          console.log('Error', err.message);
        }
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;