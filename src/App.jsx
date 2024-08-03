import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/style.css';
import './charts/ChartjsConfig';
// Import pages
import Dashboard from './pages/Dashboard';
import AddTask from './components/AddTask';
import SignIn from './pages/SignIn';
import LoginIn from './pages/Login';
import ProtectedRoute from './utils/ProtectedRoutes';
import PublicRoute from './utils/PublicRoutes';
import UserProvider from './utils/Context/UserContext';
import ListTask from './components/ListTask';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);

  return (
    <UserProvider>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<LoginIn />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/listTask" element={<ListTask />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;