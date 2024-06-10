import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph({ tickets }) {
  const getMonthYear = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}-${date.getMonth() + 1}`;
  };

  const ticketsPerMonth = new Map();
  tickets.forEach(ticket => {
    const monthYear = getMonthYear(ticket.created_at);
    ticketsPerMonth.set(monthYear, (ticketsPerMonth.get(monthYear) || 0) + ticket.quantity);
  });
console.log(ticketsPerMonth);

  const sortedMonths = Array.from(ticketsPerMonth.keys()).sort();
  const ticketCounts = sortedMonths.map(month => ticketsPerMonth.get(month));
console.log(ticketsPerMonth);
  const data = {
    labels: sortedMonths,
    datasets: [
      {
        label: 'Tickets Sold Per Month',
        data: ticketCounts,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: true,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Tickets Sold Each Month',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Tickets',
        },
        beginAtZero: true,
      },
    },
  };

  return <Line options={options} data={data} />;
}
