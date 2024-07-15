import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className='sidebar' onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
      {isSidebarOpen ? (
        <div className='open'>
          <Link className="link" to='/'>Dashboard</Link>
          <Link className="link" to='/application'>Application Form</Link>
          <Link className="link" to='/users'>Users</Link>
        </div> 
        ) : (
          <div className='close'>
            <Link className="link" to='/'>-</Link>
            <Link className="link" to='/application'>-</Link>
            <Link className="link" to='/users'>-</Link>
          </div> 
        )
      }
    </div>
  )
}

export default SideBar