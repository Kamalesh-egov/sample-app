import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const TopBar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isTopbarOpen, setIsTopbarOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate("/login");
  }

  const toggleMenu = () => {
    setIsTopbarOpen(!isTopbarOpen);
  }

  return (
    <div className='topbar'>
      {!isTopbarOpen ? (
      <div className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      ) :
      (
        <div className='menu'>
          <p onClick={toggleMenu}>✕</p>
          <p className='profile-ham'>{user.email.charAt(0).toUpperCase()}</p>
          <p onClick={handleLogout}>Logout</p>
        </div>
      )}
      <button onClick={handleLogout}>Logout</button>
      <div className='profile'>{user.email.charAt(0).toUpperCase()}</div>
    </div>
  )
}

export default TopBar
