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
  ["Primary", 45],
  ["REPEAT", 25],
  ["Priority", 50],
  ["FRESH", 45],
  
];

export const options2 = {
  title: "Grievance",
  pieHole: 0.8,
  is3D: false,
  colors: ["#40BEA6", "#FF7C3B", "#B3A8F9"],
  legend: { position: "bottom" }
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
            START
          </tr>
          <tr>
            <td>FINISH</td>
            <td>2018-04-04</td>
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
                width="220px"
                height="200px"
                data={data}
                options={options}
                />
    </div>

    
      </div>
      <div className="second-big-wrapper">
        <div className="task-wrapper">
          <Chart
                      chartType="PieChart"
                        width="300px"
                        height="230px"
                        data={data2}
                        options={options2}
                    />
        </div>
        <div className="resources-task-wrapper">
          <Chart
                      chartType="PieChart"
                        width="300px"
                        height="230px"
                        data={data2}
                        options={options2}
                    />
        </div>
        <div className="cost-budget-wrapper"></div>
      </div>
    </div>
    </div>
  )
}

export default Performance
