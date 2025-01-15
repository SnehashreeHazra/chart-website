import React from 'react'
import './Performance.css'
import { Chart } from "react-google-charts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";




export const data = [
  ["Category", "Value", { role: "annotation" }, { role: "style" }],
  ["overallocated", 200, "200 People", "##2F69F4"],
  ["Normaly", 900, "900 People", "#1060AE"],
  ["Underallocated", 900, "900 People", "#95B856"],
];

export const options = {
  title: "Resource Allocation",
  chartArea: { width: "50%" },
  isStacked: true,
  bars: "horizontal",
  hAxis: {
    gridlines: { count: 0 },
    textPosition: "none",
  },
  legend: "none",
  annotations: {
    alwaysOutside: true, 
  },
};



export const data2 = [
  ["Task", "Hours per Day"],
  ["On time task", 60],
  ["LATE TASKS", 60],
  ["Early Task", 25],
  ["", 25],
  
];

export const options2 = {
  title: "Tasks",
  pieHole: 0.8,
  is3D: false,
  colors: ["#40BEA6", "#FF7C3B", "#B3A8F9", "#B3A8F9"],
};



export const data3 = [
  ["Task", "Hours per Day"],
  ["On time task", 60],
  ["LATE TASKS", 60],
  ["Early Task", 25],
  ["", 25],
  
];

export const options3 = {
  title: "Resource and tasks",
  pieHole: 0.8,
  is3D: false,
  colors: ["#40BEA6", "#FF7C3B", "#B3A8F9", "#B3A8F9"],

};

function Performance() {
  

  return (
    <div className='performance'>
    <div className="performance-content">
      <h2 className='performance-title'>Performance</h2>
      <div className="table-chart-wrapper">
      <div className="table-container">
      <h2>PROJECT MANAGER</h2>
      <table className="project-table">
        <tbody>
          <tr>
          <td colSpan="2">
          START
          </td>
            
          </tr>
          <tr>
            <td style={{width: "50%"}}>FINISH</td>
            <td style={{width: "50%"}}>2018-04-04</td>
          </tr>
          <tr>
            <td>DURATION</td>
            <td>287 day(s)</td>
          </tr>
          <tr>
            <td>COMPLETE</td>
            <td>42%</td>
          </tr>
          <tr>
            <td>BUDGET</td>
            <td>₹62 600,00</td>
          </tr>
          <tr>
            <td>PURULIA</td>
            <td>Open Black sea port in 2018</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="resource-chart-div">
      <Chart
                chartType="BarChart"
                width="350px"
                height="200px"
                data={data}
                options={options}
                />
    </div>

    <div className="progress-bar-section">
    <div className="budget-heading">
          <h2>Project Complete</h2>
        </div>

        <h2 className='rupees'>55%</h2>
          <div className="progress-bar">
            <div className="progressfill"></div> 
          </div>
          <h2 className='rupees'>45%</h2>
    </div>
      </div>
      <div className="second-big-wrapper">
        <div className="task-wrapper">
          <Chart
                      chartType="PieChart"
                        width="350px"
                        height="230px"
                        data={data2}
                        options={options2}
                    />
        </div>
        <div className="resources-task-wrapper">
          <Chart
                      chartType="PieChart"
                        width="350px"
                        height="230px"
                        data={data3}
                        options={options3}
                    />
        </div>
        <div className="cost-budget-wrapper">
        <div className="budget-heading">
          <h2>Cost and Budget</h2>
        </div>

        <h2 className='rupees'>₹47000</h2>
          <div className="progress-bar">
            <div className="progressfill"></div> 
          </div>
          <h2 className='rupees'>₹46000</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Performance
