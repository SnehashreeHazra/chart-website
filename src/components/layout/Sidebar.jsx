import React from 'react'
import '../../App.css'
import Logo from '../../Images/Logo.png'

function Sidebar() {
  return (
    <div className='sidebar-section'>
      <div className="sidebar-wrapper">
        <div className="logo"><img src={Logo} alt="" /></div>
        <div className="menubar">
          <a href="#">Overview</a>
          <a href="#">Deviation Module</a>
          <a href="#">Grievance Module</a>
          <a href="#">Monitoring and evaluation</a>
          <a href="#">Asset management</a>
          <a href="#">Scheme management</a>
          <a href="#">Finance management</a>
          <a href="#">Procurement management</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
