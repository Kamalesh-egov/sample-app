import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='sidebar'>
      <div className='hamburger' onClick={toggleSidebar}>
        <div className="line">
           {isOpen ? <p>✕</p> : <p>⚟</p>}
        </div>
      </div>
      {isOpen &&
        <div className='open'>
          <Link className="link" to='/'>Dashboard</Link>
          <Link className="link" to='/application'>Application Form</Link>
          <Link className="link" to='/users'>Users</Link>
        </div> 
      }
    </div>
  )
}

export default SideBar