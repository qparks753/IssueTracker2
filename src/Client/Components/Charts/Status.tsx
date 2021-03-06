import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: ['OPEN', 'CLOSED', 'IN PROGRESS', 'Green', 'Purple', 'Orange'],
  labels: ['OPEN', 'CLOSED', 'IN PROGRESS'],
  datasets: [
    {
      label: '# of Votes',
      // data: [12, 19, 3, 5, 2, 3],
      data: [1, 2, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export function Status() {
   
  return(

  <div className="typeContainer" style={{display:"flex", justifyContent:"Center", alignItems:"center", flexDirection:"column", marginTop:"20px", }}>
    <span style={{fontSize:"25px", fontWeight:"400"}} >Ticket Status</span>

   <Pie
   style={{maxWidth:"40%", maxHeight:"90%", border:"0.3px solid lightgrey" }}
  
  data={data} />
  </div>
  )
}