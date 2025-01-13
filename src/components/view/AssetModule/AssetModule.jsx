import React, { useState } from 'react'
import icon1 from '../../../Images/Group 4534375.png'
import icon2 from '../../../Images/Group 4534376.png'
import icon3 from '../../../Images/Group 4534377.png'
import icon4 from '../../../Images/Group 4534378.png'
import { Chart } from "react-google-charts";

import './AssetModule.css'



export const data = [
  ["Year", "Sales", "Expenses"],
  ["Dec 01", 1000, 400],
  ["Dec 02", 1170, 460],
  ["Dec 03", 660, 1120],
  ["Dec 04", 1030, 540],
  ["Dec 05", 1000, 400],
  ["Dec 06", 1170, 460],
  ["Dec 07", 660, 1120],
];

export const options = {
  title: "Asset Value",
  curveType: "function",
  legend: { position: "bottom" },
};



export const data3 = [
  ["Element", "Density", { role: "style" }],
  ["Jan", 4300, "#2F69F4"], 
  ["Feb", 5300, "#2F69F4"], 
  ["March", 5300, "#2F69F4"],
  ["April", 5300, "#2F69F4"],
  ["May", 5300, "#2F69F4"], 
  ["June", 5300, "#2F69F4"], 
  ["July", 6300, "#2F69F4"],
  ["Augt", 6300, "#2F69F4"],
  ["Sep", 5000, "#2F69F4"], 
  ["Oct", 5700, "#2F69F4"], 
  ["Nov", 5700, "#2F69F4"],
  ["Dec", 5700, "#2F69F4"], 
];

export const options3 = {
  title: "Project Fund",
  bar: { groupWidth: "25%" },
  legend: "none",
  borderRadius: 10
}

function AssetModule() {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };


  return (
    <div className='asset-module-section'>
      <div className="asset-module-content">
        <div className="asset-small-boxes-wrapper">

        <div className="asset-small-div">
          <img src={icon3} alt="" />
            <div className="asset-small-div-content">
              <h2>Number of Assets</h2>
              <p>66</p>
              
            </div>
          </div>


          <div className="asset-small-div">
          <img src={icon4} alt="" />
            <div className="asset-small-div-content">
              <h2>Value of Assets</h2>
              <p>₹108,658</p>
              
            </div>
          </div>

          <div className="asset-small-div">
          <img src={icon1} alt="" />
            <div className="asset-small-div-content">
              <h2>Net Assets Value</h2>
              <p>₹78,259</p>
              
            </div>
          </div>

          <div className="asset-small-div">
          <img src={icon2} alt="" />
            <div className="asset-small-div-content">
              <h2>Purchases in Fiscal Year</h2>
              <p>₹8,658</p>
              
            </div>
          </div>
        </div>
        <div className="main-wrapper">
        <div className="asset-feeds-column">

<div className="asset-chart">
<Chart
  chartType="LineChart"
  width="600px"
  height="100%"
  data={data}
  options={options}
  legendToggle
/>
</div>


<div className="feeds-container">
<div className="feeds-header">
<h2>Feeds</h2>
<div className="button-group">
<button className="btn-primary">Asset Check out</button>
<button className="btn-secondary">Asset under Repair</button>
</div>
</div>
<table className="feeds-table">
<thead>
<tr>
  <th>Asset tag ID</th>
  <th>Description</th>
  <th>Due Date</th>
</tr>
</thead>
<tbody>
<tr>
  <td>A014</td>
  <td>Road Consumer</td>
  <td>No Due Date</td>
</tr>
<tr>
  <td>A014</td>
  <td>Tourism model</td>
  <td>No Due Date</td>
</tr>
<tr>
  <td>A014</td>
  <td>Pipeline</td>
  <td>No Due Date</td>
</tr>
<tr>
  <td>A014</td>
  <td>Road Consumer</td>
  <td>No Due Date</td>
</tr>
<tr>
  <td>A014</td>
  <td>Tourism model</td>
  <td>No Due Date</td>
</tr>
</tbody>
</table>
</div>


</div>



<div className="project-table-column">
    <div className="project-fund-chart">
      <Chart chartType="ColumnChart" width="550px" height="200px" data={data3} options={options3}/>
    </div>

    <div className="date-picker">
      
      <table className="calendar">
      <thead>
        <tr className="date-header">22/05/24</tr>
      </thead>
      <thead>
        <tr>
          <td colSpan="3">September</td>
          <td colSpan="4">2024</td>
        </tr>
      </thead>
        <thead>
          <tr>
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Week 1 */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="day" onClick={() => handleDateClick(1)}>
              1
            </td>
            <td className="day" onClick={() => handleDateClick(2)}>
              2
            </td>
          </tr>
          {/* Week 2 */}
          <tr>
            <td className="day" onClick={() => handleDateClick(3)}>
              3
            </td>
            <td className="day" onClick={() => handleDateClick(4)}>
              4
            </td>
            <td className="day" onClick={() => handleDateClick(5)}>
              5
            </td>
            <td className="day" onClick={() => handleDateClick(6)}>
              6
            </td>
            <td className="day" onClick={() => handleDateClick(7)}>
              7
            </td>
            <td className={`day ${selectedDate === 8 ? "selected" : ""}`} onClick={() => handleDateClick(8)}>
              8
            </td>
            <td className={`day ${selectedDate === 9 ? "selected" : ""}`} onClick={() => handleDateClick(9)}>
              9
            </td>
          </tr>
          {/* Week 3 */}
          <tr>
            <td className="day" onClick={() => handleDateClick(10)}>
              10
            </td>
            <td className="day" onClick={() => handleDateClick(11)}>
              11
            </td>
            <td className="day" onClick={() => handleDateClick(12)}>
              12
            </td>
            <td className="day" onClick={() => handleDateClick(13)}>
              13
            </td>
            <td className="day" onClick={() => handleDateClick(14)}>
              14
            </td>
            <td className="day" onClick={() => handleDateClick(15)}>
              15
            </td>
            <td className="day" onClick={() => handleDateClick(16)}>
              16
            </td>
          </tr>
          {/* Week 4 */}
          <tr>
            <td className="day" onClick={() => handleDateClick(17)}>
              17
            </td>
            <td className="day" onClick={() => handleDateClick(18)}>
              18
            </td>
            <td className="day" onClick={() => handleDateClick(19)}>
              19
            </td>
            <td className="day" onClick={() => handleDateClick(20)}>
              20
            </td>
            <td className="day" onClick={() => handleDateClick(21)}>
              21
            </td>
            <td className="day" onClick={() => handleDateClick(22)}>
              22
            </td>
            <td className="day" onClick={() => handleDateClick(23)}>
              23
            </td>
          </tr>
          {/* Week 5 */}
          <tr>
            <td className="day" onClick={() => handleDateClick(24)}>
              24
            </td>
            <td className="day" onClick={() => handleDateClick(25)}>
              25
            </td>
            <td className="day" onClick={() => handleDateClick(26)}>
              26
            </td>
            <td className="day" onClick={() => handleDateClick(27)}>
              27
            </td>
            <td className="day" onClick={() => handleDateClick(28)}>
              28
            </td>
            <td className="day" onClick={() => handleDateClick(29)}>
              29
            </td>
            <td className="day" onClick={() => handleDateClick(30)}>
              30
            </td>
          </tr>
        </tbody>
      </table>
    </div>


</div>
      </div>

        
      </div>
    </div>
  )
}

export default AssetModule
