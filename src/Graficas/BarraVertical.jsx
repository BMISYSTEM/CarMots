import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarraVertical() {
  const options = {
    responsive: true,
   
  };
   const data = {
    labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Ventas mensuales',
        data: [1,2,3,4,5,6,7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };
  return (
    <>
    <Bar options={options} data={data} />
    </>
    )
}
