import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// const data = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//   datasets: [
//     {
//       label: 'Monthly Sales',
//       data: [65, 59, 80, 81, 56],
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderWidth: 1,
//     },
//   ],
// };

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};


export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}
