import React from 'react'
import './ProcurementModule.css'
import {Bar} from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import 'chartjs-adapter-date-fns';



ChartJS.register(CategoryScale, LinearScale, BarElement, TimeScale, Title, Tooltip, Legend);

const data5 = {
  // labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Weekly Sales",
      data: [
        {x: ['2025-01-01', '2025-02-28'], y: 'Road Construction'},
        {x: ['2025-03-01', '2025-04-30'], y: 'Pipeline'},
        {x: ['2025-05-01', '2025-06-30'], y: 'Tourism Model'},
        {x: ['2025-09-01', '2025-10-30'], y: 'Road Construction2'},
        {x: ['2025-07-01', '2025-08-30'], y: 'Pipeline2'},
        
      ],
      backgroundColor: [
        "#FF2929",
        "#FF8D29",
        "#2A6B07",
        "#FF2929",
        "#FF8D29",
        
      ],
      
      borderWidth: 1,
      borderSkipped: false,
      borderRadius: 10,
      barPercentage: 0.23
    },
  ],
};

// Configuration options
const options5 = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Weekly Sales Data",
    },
  },
  scales: {
    x: {
      position: 'top',
      type: 'time',
      time: {
        unit: 'month'
      },
      min: '2025-01-01',
      max: '2025-12-30'
    },
  },
 
  plugins: {
    legend: {
      display: false
    }
  }
};

function ProcurementModule() {
  return (
    <div>
      <div className="procure-content">
        <h2>Project Plan</h2>
        <Bar data={data5} options={options5} />
      </div>
    </div>
  )
}

export default ProcurementModule
