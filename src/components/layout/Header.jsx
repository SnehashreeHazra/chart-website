import React from 'react'
import '../../App.css';
import notificationLogo from '../../Images/Notification.png'
import image from '../../Images/image.png'
import searchIcon from '../../Images/Search Icon.png'
import Sidebar from './Sidebar';


function Header() {

  return (
    <>
      <Sidebar />
<div className='header-section'>
      <div className="header-section-wrapper dashboard-content">
      <div className="left-section">
      <div className="search-box">
          <img src={searchIcon} alt="" />
          <input className='search-input' type="text" placeholder='Type to search'/>
        </div>
      </div>
        <div className="right-section">
          <div className="notification"><img src={notificationLogo} alt="" /></div>
          <div className="profile-div"><img src={image} alt="" /><span>Trisit</span></div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Header;
