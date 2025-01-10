import React from 'react'
import { Chart } from "react-google-charts";
import './DashboardMain.css'
import icon1 from '../../../Images/Group 4534375.png'
import icon2 from '../../../Images/Group 4534376.png'
import icon3 from '../../../Images/Group 4534377.png'
import icon4 from '../../../Images/Group 4534378.png'
import group_img from "../../../Images/group-img.png"
import file_four_img from '../../../Images/file-4.png'
import ongoing_img from '../../../Images/number-3.png'

export const data1 = [
  ["Task", "Hours per Day"],
  ["Financial Progress", 40],
  ["planned schedule ", 60],

];

export const options1 = {
  title: "Progress Deviation",
  pieHole: 0.8,
  is3D: false,
  colors: ["#BCD0FF", "#2F69F4"],
  legend: { position: "bottom" }
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
  colors: ["#666DCE", "#FF969C", "#84D8F2", "#FBD677"],
  legend: { position: "bottom" }
};

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
}

const data4 = [
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

const options4 = {
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
};


export const data5 = [
  [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ],
  [
    "Road1",
    "Road Construction - Unakoti",
    "Pending",
    new Date(2025, 0, 1),
    new Date(2025, 1, 1),
    null,
    0,
    null,
  ],
  [
    "Pipeline1",
    "Pipeline - North Tripura",
    "In Process",
    new Date(2025, 3, 1),
    new Date(2025, 4, 1),
    null,
    50,
    null,
  ],
  [
    "Tourism",
    "Tourism Model - South Tripura",
    "Completed",
    new Date(2025, 5, 1),
    new Date(2025, 6, 1),
    null,
    100,
    null,
  ],
  [
    "Road2",
    "Road Construction - Sepahijala",
    "Pending",
    new Date(2025, 8, 1),
    new Date(2025, 9, 1),
    null,
    0,
    null,
  ],
  [
    "Pipeline2",
    "Pipeline - North Tripura",
    "In Process",
    new Date(2025, 10, 1),
    new Date(2025, 11, 1),
    null,
    50,
    null,
  ],
];

export const options5 = {
  height: 600,
  gantt: {
    trackHeight: 50,
  },
};


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
        <div className="charts-container">

        <div className="deviation-module">
        <h2>Deviation Module</h2>
          <div className="deviation-module-box">
          <Chart
            chartType="PieChart"
              width="200px"
              height="200px"
              data={data1}
              options={options1}
          />
          </div>
        </div>
        <div className="grievance-module">
        <h2>Grievance Module</h2>
          <div className="grievance-module-box">
          <Chart
            chartType="PieChart"
              width="200px"
              height="200px"
              data={data2}
              options={options2}
          />
          </div>
        </div>
        <div className="monitoring-module">
          <h2>Monitoring & Evaluation Module</h2>
          <div className="monitoring-module-box">
          <Chart
          chartType="BarChart"
          width="220px"
          height="200px"
          data={data}
          options={options}
          />
          </div>
        </div>
        <div className="management-module">
        <h2>Asset management Module</h2>
        <div className="management-module-box">
          <Chart chartType="ColumnChart" width="220px" height="200px" data={data3} options={options3}/>
        </div>
        </div>
        <div className="finance-module">
          <h2>Finance Module</h2>
          <div className="finance-module-box">
          <Chart
        chartType="BarChart"
        width="300px"
        height="200px"
        data={data4}
        options={options4}
      />
          </div>
        </div>
        </div>



        <div className="thired-big-div">
          <div className="first-big-div">
            <div className="first-big-div-wrapper">
              <h2>scheme Management</h2>
              <h3>Activity Management</h3>
              <div className="three-div-wrapper">
                <div className="first-div">
                <div className="head">
                  <h2>ongoing</h2>
                  <img src={ongoing_img} alt="" />
                </div>

                  <div className="ongoing-div">
                    <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>


                  <div className="ongoing-div">
                  <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>



                  <div className="ongoing-div">
                  <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>

                </div>



                <div className="first-div">
                <div className="head">
                  <h2>completed</h2>
                  <img src={ongoing_img} alt="" />
                </div>

                  <div className="ongoing-div">
                    <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>


                  <div className="ongoing-div">
                  <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>



                  <div className="ongoing-div">
                  <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>
                </div>




                <div className="first-div">
                <div className="head">
                  <h2>Future Activities</h2>
                  <img src={ongoing_img} alt="" />
                </div>

                  <div className="ongoing-div">
                    <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>


                  <div className="ongoing-div">
                  <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>



                  <div className="ongoing-div">
                  <div className="heading-container">
                      <h2>Road Construction(Dhalai)</h2>
                      <img src={file_four_img} alt="" />
                    </div>
                    <p>Lorem Ipsum'is simply dummy text of </p>
                    <div className="bottom-div">
                      <div className="left-bottom">
                        <p>Asignees</p>
                        <p>22.12.2024</p>
                      </div>
                      <div className="right-img-div"><img src={group_img} alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-big-div">
          <h2>Procurement Module</h2>
            <div className="last-chart-wrapper">
            <h3>Project Plan</h3>
            <Chart
            chartType="Gantt"
            width="100%"
            height="300px"
            data={data5}
            options={options5}
            />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default DashboardMain
