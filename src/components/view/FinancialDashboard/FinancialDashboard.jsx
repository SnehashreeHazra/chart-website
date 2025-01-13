import React from 'react'
import './FinancialDashboard.css'
import { Chart } from "react-google-charts";




export const data1 = [
  ["Task", "Hours per Day"],
  ["Balance", 40],
  ["Expend", 60],

];

export const options1 = {
  title: "Financial Balance (2025)",
  pieHole: 0.8,
  is3D: false,
  colors: ["#BCD0FF", "#2F69F4"],
  legend: { position: "bottom" },
  titleTextStyle: {
    fontSize: 13
  }
};

export const data2 = [
  ["Task", "Hours per Day"],
  ["", 40],
  [" ", 60],

];

export const options2 = {
  title: "Total Fund",
  pieHole: 0.8,
  is3D: false,
  colors: ["#BCD0FF", "#2F69F4"],
  legend: "none",
  titleTextStyle: {
    color: "#2F69F4", 
    fontSize: 18, 
    bold: true,  
    textAlign: "center" 
  }
};



export const data3 = [
  ["Element", "Density", { role: "style" }],
  ["Jan 2025", 22, "#2F69F4"], 
  ["Feb 2025", 26, "#2F69F4"], 
  ["Mar 2025", 26, "#2F69F4"],
  ["Apr 2025", 26, "#2F69F4"],
  ["May 2025", 26, "#2F69F4"], 
  ["Jun 2025", 26, "#2F69F4"], 
  ["Jul 2025", 32, "#2F69F4"],
  ["Aug 2025", 32, "#2F69F4"],
];

export const options3 = {
  title: "Expence Tracking",
  bar: { groupWidth: "25%" },
  legend: "none",
  titleTextStyle: {
    fontSize: 13
  }
}


export const data5 = [
  ["Element", "Density", { role: "style" }],
  ["Jan 2025", 22, "#2F69F4"], 
  ["Feb 2025", 26, "#2F69F4"], 
  ["Mar 2025", 26, "#2F69F4"],
  ["Apr 2025", 26, "#2F69F4"],
  ["May 2025", 26, "#2F69F4"], 
  ["Jun 2025", 26, "#2F69F4"], 
  ["Jul 2025", 32, "#2F69F4"],
  ["Aug 2025", 32, "#2F69F4"],
];

export const options5 = {
  title: "Payment Tracking",
  bar: { groupWidth: "25%" },
  legend: "none",
  titleTextStyle: {
    fontSize: 13
  }
}






export const data4 = [
  ["Category", "Value",  { role: "annotation" }],
  ["2034", 60, "₹60L"],
  ["2033", 20, "₹20L"],
  ["2032", 40, "₹40L"],
  ["2031", 50, "₹50L"],
  ["2030", 45, "₹45L"],
  ["2029", 40, "₹40L"],
  ["2028", 62, "₹62L"],
  ["2027", 48, "₹48L"],
  ["2026", 42, "₹42L"],
  ["2025", 39, "₹39L"],
];

export const options4 = {
  title: "Fund Allocation",
  chartArea: { width: "70%" },
  bars: "horizontal",
  bar: { groupWidth: "50%" },
  hAxis: {
      gridlines: { count: 0 },
      textPosition: "none",
  },
  legend: "none",
  annotations: {
    alwaysOutside: true, 
  },
  titleTextStyle: {
    fontSize: 15
  },
};


export const data = [
  { id: 1, name: "Trishit", payment: "₹10000", phone: "8334981476", lastPaymentDate: "24.12.2024" },
  { id: 2, name: "Ram", payment: "₹20000", phone: "7689567890", lastPaymentDate: "24.12.2024" },
  { id: 3, name: "Rohim", payment: "₹30000", phone: "9867975645", lastPaymentDate: "24.12.2024" },
  { id: 4, name: "Akash", payment: "₹40000", phone: "8765987689", lastPaymentDate: "24.12.2024" },
  { id: 5, name: "Rajib", payment: "₹50000", phone: "8765456798", lastPaymentDate: "24.12.2024" },
  { id: 6, name: "Raj", payment: "₹60000", phone: "8334981476", lastPaymentDate: "24.12.2024" },
];

function FinancialDashboard() {
  
  
  return (
    <div className='dashboard'>
      <div className="finance-content">
      <div className="fund-donut-wrapper">
      <div className="fund-div">
          <Chart
                  chartType="BarChart"
                  width="100%"
                  height="100%"
                  data={data4}
                  options={options4}
                />
        </div>
        <div className="donut-chart-div">
          <div className="first-donut">
            <Chart
                        chartType="PieChart"
                          width="250px"
                          height="100%"
                          data={data1}
                          options={options1}
                      />
          </div>
          <div className="second-donut">
            <Chart
                        chartType="PieChart"
                          width="300px"
                          height="100%"
                          data={data2}
                          options={options2}
                      />
          </div>
        </div>
      </div>
        
        


        <div className="report-expence-wrapper">
          <div className="expences-div-wrapper">
            <div className="expence-tracking">
              <Chart chartType="ColumnChart" width="290px" height="100%" data={data3} options={options3}/>
            </div>
            <div className="payment-tracking">
              <Chart chartType="ColumnChart" width="290px" height="100%" data={data5} options={options5}/>
            </div>
          </div>
          <div className="report-table-wrapper">
              <div className="table-container1">
                <h2 className='table-title'>Financial Reporting</h2>
                <table>
                <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Payment</th>
                  <th>Phone Number</th>
                  <th>Last Payment Date</th>
                </tr>
                </thead>
                <tbody>
                  {data.map((item)=> (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.payment}</td>
                          <td>{item.phone}</td>
                          <td>{item.lastPaymentDate}</td>
                        </tr>
                  ))}
                </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export default FinancialDashboard
