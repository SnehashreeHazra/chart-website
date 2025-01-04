import React from 'react'
import './LogIn.css'
import LeftImage from '../../Images/Group 4534371.png'
import Logo from '../../Images/Logo.png'
import EmailLogo from '../../Images/Group 4.png'
import PasswordLogo from '../../Images/Group 4534372.png'
import facebookLogo from '../../Images/Group 71601.png'
import googleLogo from '../../Images/Group 71602.png'
import appleLogo from '../../Images/Group 71603.png'

function LogIn() {
  return (
    <div className="login-page">


<div className='login-page-wrapper'>
      <div className="left-image-section">
        <img src={LeftImage} alt="Big Image" />
      </div>
      <div className="right-form-section">
        <div className="form-wrapper">
          <div className="logo-div"><img src={Logo} alt="Logo" /></div>
          <h2 className='login-heading'>Register into your accout</h2>
          <form className='login-form'>
          <label htmlFor="">Email address</label>
          <div className="form-group">
          <input type="text" className='input-field' name='email' placeholder='alex@email.com' required/><img src={EmailLogo} alt="" />
          </div>
          <label htmlFor="">Password</label>
            <div className="form-group">
            <input type="text" className='input-field' placeholder='Enter your password' required/><img src={PasswordLogo} alt="" />
            </div>
            <button type='submit' className='login-button'>Login</button>
            <p className='seperator'><span>or Login with</span></p>
          </form>
          <div className="social-icons">
            <button className='social-button'>
              <img src={facebookLogo} alt="" />
            </button>
            <button className='social-button'>
              <img src={googleLogo} alt="" />
            </button>
            <button className='social-button'>
              <img src={appleLogo} alt="" />
            </button>
          </div>
          <p className='last-text'>Have an account? <a href="#"> Register</a></p>
        </div>
      </div>
    </div>



    </div>
    
  )
}

export default LogIn
