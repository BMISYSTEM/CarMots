import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



export default function Area() {
    
 const options = {
    responsive: true,
    maintainAspectRatio:false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Entregados',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: '',
        data: [1,2,3,4,5,6,7],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return (
    <>
    <Line options={options} data={data} />
    </>
  )
}
