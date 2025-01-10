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

    <div className="project-complete-s">
    <div style={{ textAlign: "center", backgroundColor: "#f6f8fa", padding: "20px", borderRadius: "10px" }}>
      <h2 style={{ marginBottom: "10px" }}>Project Complete</h2>
      <ResponsiveContainer width="80%" height={100}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          <Bar dataKey="completed" stackId="a" fill="#007bff">
            <Cell key="completed" fill="#007bff" />
          </Bar>
          <Bar dataKey="remaining" stackId="a" fill="#c5d9f7">
            <Cell key="remaining" fill="#c5d9f7" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 10%" }}>
        <span>45%</span>
        <span>55%</span>
      </div>
    </div>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Performance
