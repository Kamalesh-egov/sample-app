import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login'; 
import Dashboard from './pages/Dashboard';
import Application from './pages/Application';
import Users from './pages/Users'; 
import UserContext from './contexts/UserContext';

const App = () => {
  
  const {user, setUser} = useContext(UserContext);

  const [isUserLoaded, setIsUserLoaded] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },[setUser]);



  useEffect(() => {
    setIsUserLoaded(false);
  }, [user]);

  if (!isUserLoaded) {

    return (
      <Router >
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/application" element={<Application />} />
              <Route path="/users" element={<Users />} />
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
