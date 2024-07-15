import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext';

const TopBar = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate("/login");
  }

  return (
    <div className='topbar'>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default TopBar