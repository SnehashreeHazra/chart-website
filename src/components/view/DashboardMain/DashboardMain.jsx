import React from 'react'
import './DashboardMain.css'
import icon1 from '../../../Images/Group 4534375.png'
import icon2 from '../../../Images/Group 4534376.png'
import icon3 from '../../../Images/Group 4534377.png'
import icon4 from '../../../Images/Group 4534378.png'

function DashboardMain() {
  return (
    <div className='dashboard-wrapper'>
      <div className="dashboard-content">
        <div className="small-divs-container">
          <div className="small-div">
            <img src={icon3} alt="" />
            <div className="small-div-content">
              <h2>Deviation Model</h2>
              <p>66</p>
            </div>
          </div>
          <div className="small-div">
          <img src={icon4} alt="" />
            <div className="small-div-content">
              <h2>Grievance Module</h2>
              <p>₹108,658</p>
            </div>
          </div>
          <div className="small-div">
          <img src={icon1} alt="" />
            <div className="small-div-content">
              <h2>Monitoiring and evaluation</h2>
              <p>₹78,259</p>
            </div>
          </div>
          <div className="small-div">
          <img src={icon2} alt="" />
            <div className="small-div-content">
              <h2>Asset management</h2>
              <p>₹8,658 </p>
            </div>
          </div>
          <div className="small-div">
          <img src={icon3} alt="" />
            <div className="small-div-content">
              <h2>Scheme Management </h2>
              <p>66</p>
            </div>
          </div>
          <div className="small-div">
          <img src={icon4} alt="" />
            <div className="small-div-content">
              <h2>Finance Management</h2>
              <p>₹108,658</p>
            </div>
          </div>
          <div className="small-div">
          <img src={icon1} alt="" />
            <div className="small-div-content">
              <h2>Procurement Management</h2>
              <p>₹78,259</p>
            </div>
          </div>
        </div>
        <div className="deviation-module">
          <div className="deviation-module-box">
            
          </div>
        </div>
        <div className="grievance-module"></div>
        <div className="monitoring-module"></div>
        <div className="management-module"></div>
        <div className="finance-module"></div>
      </div>
    </div>
  )
}

export default DashboardMain
