import React from "react";
import useBpsystem from "../hooks/useBpsystem";
import { Chart } from "react-google-charts";


export default function Gantt() {
  const {modonoche,setModonoche} = useBpsystem()
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];
  
  const rows = [
    // [
    //   "2023",
    //   "Compra de vehiculos",
    //   "2023",
    //   new Date(2023,  12, 7),
    //   new Date(2023, 12, 5),
    //   null,
    //   100,
    //   null,
    // ],
    [
      "Hockey",
      "Publicidad de kia",
      "uno",
      new Date(2023,4,8,0),
      new Date(2023,4,9,0),
      null,
      100,
      null,
    ],
    [
      "otro",
      "Entrega de carro kia",
      "dos",
      new Date(2023,4, 8,0),
      new Date(2023,4,8,12),
      null,
      100,
      null,
    ],
    [
      "diferente",
      "Prueba 2",
      "tres",
      new Date(2023,4,9,0),
      new Date(2023,4,12,3),
      null,
      100,
      null,
    ],
    [
      "2",
      "Prueba 3",
      "cuatro",
      new Date(2023,4,12,0),
      new Date(2023,4,12,3),
      null,
      100,
      null
    ],
  ];
  const data = [columns, ...rows];
  // const options = {
  //   height: 400,
  //   gantt: {
  //     trackHeight: 100,
  //     labelStyle:{color: '#00000'}

  //   },
  // };
  const color = modonoche? "black" : "white"
   const options = {
    gantt: {
      criticalPathEnabled: false,
      innerGridHorizLine: {
        stroke: "gray",
        strokeWidth: 1,
      },
      labelStyle: {
        fontSize: 16,
        color: 'black'
      },
      innerGridTrack: { fill: color },
      innerGridDarkTrack: { fill: color },
    },
  };

  return (
    <>
        <Chart
      chartType="Gantt"
      width="100%"
      height="auto"
      data={data}
      options={options}
    />
    </>
  )
}
