import React from 'react';
import styled from 'styled-components';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 80%;
`;

const ChartCanvas = styled.div`
  height: 80%;
  width: 70%;
  margin-top: 4vh;

  @media (max-width: 768px) {
    height: 40%;
    width: 100%;
    margin-top: 4vh;
  }
`;

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

Chart.defaults.color = 'white';
Chart.defaults.font.family = 'Segoe UI, Dejavu Sans, Verdana, Helvetica Neue, sans-serif';
Chart.defaults.font.size = 13;

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    },
    title: {
      display: true,
      text: 'Distance vs. Elevation',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'days'
      },
      type: 'linear' as const,
      display: true
    },
    y: {
      title: {
        display: true,
        text: 'distance (mi)'
      },
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      title: {
        display: true,
        text: 'elevation (ft)'
      },
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const data = {
  labels,
  datasets: [
    {
      label: 'Distance',
      data: [35, 32, 34, 33, 31, 32, 32, 33, 29],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Elevation',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [1234, 986, 601, 1592, 1103, 1845, 1655],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

function StatsChart() {
  return (
    <ChartWrapper>
      <ChartCanvas>
        <Line options={options} data={data} />
      </ChartCanvas>
    </ChartWrapper>
  );

}

export default StatsChart;