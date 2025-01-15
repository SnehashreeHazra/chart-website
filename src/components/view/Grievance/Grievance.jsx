import React from 'react'
import icon1 from '../../../Images/Group 4534375.png'
import icon2 from '../../../Images/Group 4534376.png'
import icon3 from '../../../Images/Group 4534377.png'
import icon4 from '../../../Images/Group 4534378.png'
import { Chart } from "react-google-charts";
import './Grievance.css'




export const data2 = [
  ["Task", "Hours per Day"],
  ["Primary", 45],
  ["REPEAT", 25],
  ["Priority", 50],
  ["FRESH", 45],
  
];

export const options2 = {
  title: "Grievance",
  pieHole: 0.8,
  is3D: false,
  colors: ["#666DCE", "#FF969C", "#84D8F2", "#FBD677"],
  backgroundColor: 'transparent',
};

export const data3 = [
  ["Element", "Density", { role: "style" }],
  ["Jan", 22, "#2F69F4"], 
  ["Feb", 26, "#2F69F4"], 
  ["Mar", 26, "#2F69F4"],
  ["Apr", 26, "#2F69F4"],
  ["May", 26, "#2F69F4"], 
  ["Jun", 26, "#2F69F4"], 
  ["Jul", 32, "#2F69F4"],
  ["Aug", 32, "#2F69F4"],
  ["Sep", 32, "#2F69F4"],
  ["Oct", 32, "#2F69F4"],
  ["Nov", 32, "#2F69F4"],
  ["Dec", 32, "#2F69F4"],
];

export const options3 = {
  title: "Monthly Basis",
  bar: { groupWidth: "25%" },
  legend: "none",
  titleTextStyle: {
    fontSize: 13
  },
  backgroundColor: 'transparent',
}

function Grievance() {
  return (
    <div className='grievance-section'>
      <div className="grievance-content">
        <div className="grievance-small-boxes">
        <div className="griv-small-div">
          <img src={icon3} alt="" />
            <div className="griv-small-div-content">
              <h2>Fresh</h2>
              <p>30</p>
              <p style={{marginTop: "10px", fontSize: "8px", }}>+55% than this week</p>
            </div>
          </div>

          <div className="griv-small-div">
          <img src={icon4} alt="" />
            <div className="griv-small-div-content">
              <h2>Primary</h2>
              <p>70,700</p>
              <p style={{marginTop: "10px", fontSize: "8px", }}>+55% than last week</p>
            </div>
          </div>

          <div className="griv-small-div">
          <img src={icon1} alt="" />
            <div className="griv-small-div-content">
              <h2>Repeat</h2>
              <p>34,700</p>
              <p style={{marginTop: "10px", fontSize: "8px", }}>+55% than this week</p>
            </div>
          </div>

          <div className="griv-small-div">
          <img src={icon2} alt="" />
            <div className="griv-small-div-content">
              <h2>Priority</h2>
              <p>54,700</p>
              <p style={{marginTop: "10px", fontSize: "8px", }}>+55% than this week</p>
            </div>
          </div>
        </div>




        <div className="griv-monthly-basis-wrapper">
          <div className="grievance-chart">
            <Chart
                        chartType="PieChart"
                          width="400px"
                          height="300px"
                          data={data2}
                          options={options2}
                      />
          </div>
          <div className="monthly-basis-chart">
            <Chart chartType="ColumnChart" width="800px" height="100%" data={data3} options={options3}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grievance
