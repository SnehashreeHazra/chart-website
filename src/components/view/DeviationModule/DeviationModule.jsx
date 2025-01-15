import React from 'react'
import './DeviationModule.css'
import { Chart } from "react-google-charts";


export const data = [
  ["Month", "Overspending", "Delayed Payments", "Unmatched Audit Figures"],
  ["Jan", 30, 20, 10],
  ["Feb", 25, 15, 30],
  ["Mar", 20, 25, 15],
  ["Apr", 30, 10, 25],
  ["May", 25, 20, 15],
  ["Jun", 20, 15, 30],
  ["Jul", 25, 20, 15],
  ["Aug", 30, 25, 10],
  ["Sep", 20, 15, 25],
  ["Oct", 30, 10, 20],
  ["Nov", 25, 20, 15],
  ["Dec", 30, 25, 20],
];

export const options = {
  title: "Financial Deviation",
  chartArea: { width: "90%" },
  
  
  legend: { position: "bottom" },
  colors: ["#2F69F4", "#AABFF0", "#80A2F5"],
};


export const data1 = [
  ["Month", "Overspending", "Delayed Payments", "Unmatched Audit Figures"],
  ["Jan", 30, 20, 10],
  ["Feb", 25, 15, 30],
  ["Mar", 20, 25, 15],
  ["Apr", 30, 10, 25],
  ["May", 25, 20, 15],
  ["Jun", 20, 15, 30],
  ["Jul", 25, 20, 15],
  ["Aug", 30, 25, 10],
  ["Sep", 20, 15, 25],
  ["Oct", 30, 10, 20],
  ["Nov", 25, 20, 15],
  ["Dec", 30, 25, 20],
];

export const options1 = {
  title: "Procurement Deviation",
  chartArea: { width: "90%" },
  
  
  legend: { position: "bottom" },
  colors: ["#2F69F4", "#AABFF0", "#80A2F5"],
};

export const data2 = [
  ["Task", "Hours per Day"],
  ["Financial Progress", 40],
  ["planned schedule ", 60],

];

export const options2 = {
  title: "Progress Deviation",
  pieHole: 0.8,
  is3D: false,
  colors: ["#BCD0FF", "#2F69F4"],
  legend: { position: "bottom" },
};


export const data3 = [
  ["Task", "Hours per Day"],
  ["On time task", 60],
  ["LATE TASKS", 60],
  ["Early Task", 25],
  ["", 25],
  
  
];

export const options3 = {
  title: "Asset Management Deviations",
  pieHole: 0.8,
  is3D: false,
  colors: ["#40BEA6", "#FF7C3B", "#B3A8F9", "#B3A8F9"],
  legend: { position: "bottom" },
};

function DeviationModule() {
  const handleChartReady = () => {
    setTimeout(() => {
      const bars = document.querySelectorAll("rect[fill]");
      bars.forEach((bar) => {
        bar.style.rx = "3"; 
        bar.style.ry = "3"; 
      });
    }, 500); 
  };
  return (
    <>
      <div className="deviation-module-content">
        <div className="financial-procurement-progress-wrapper">
          <div className="financial-chart">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="300px"
            data={data}
            options={options}
          />
          </div>
          <div className="procurement-chart" >
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="300px"
            data={data1}
            options={options1}
            chartEvents={[
          {
            eventName: "ready",
            callback: handleChartReady,
          },
        ]}
          />
          </div>
          <div className="progress-chart">
            <Chart
                        chartType="PieChart"
                          width="350px"
                          height="300px"
                          data={data2}
                          options={options2}
                          
                      />
          </div>
        </div>
        <div className="material-ESHS-asset-wrapper">
          <div className="material-chart">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="300px"
            data={data}
            options={options}
          />
          </div>
          <div className="eshs-chart">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="300px"
            data={data1}
            options={options1}
          />
          </div>
          <div className="asset-chart">
            <Chart
                                  chartType="PieChart"
                                    width="350px"
                                    height="300px"
                                    data={data3}
                                    options={options3}
                                />
          </div>
        </div>
      </div> 
    </>
  )
}

export default DeviationModule
