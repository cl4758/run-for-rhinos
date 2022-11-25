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
  /* justify-content: center;
  align-content: center; */
  align-items: center;
  width: 75%;
  height: 77%;
  flex-direction: column;
  margin-top: 3vh;
  padding-top: 1vh;
  margin-left: auto;
  margin-right: auto;
  background-color: #282828;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
    margin-top: 4vh;
  }
`;

const ChartCanvas = styled.div`
display: flex;
flex-direction: column;
  height: 92%;
  width: 92%;
  padding-top: 3vh;

  @media (max-width: 768px) {
    height: 90%;
    width: 100%;
    padding-top: 2vh;
  }
`;

const CardHeader = styled.div`
  display: flex;
  text-align: center;
  /* border-bottom: 1px; */
  /* border-width: 0px 0 2px 0;
  border-color: #404040;
  border-style: solid; */
  justify-content: center;
  > h4 {
    margin: 0 auto 0 auto;
    justify-self: center;
    font-size: 1.3em;
    font-weight: 500;
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
      display: false,
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



interface StatsChartProps {
  distances: [],
  elevations: []

}

function StatsChart({ distances, elevations }: StatsChartProps) {
  console.log(distances);
  console.log(elevations);
  const data = {
    labels,
    datasets: [
      {
        label: 'Distance',
        data: distances,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Elevation',
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        data: elevations,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  return (
    <ChartWrapper>
      <CardHeader>
        <h4>Distance vs. Elevation</h4>
      </CardHeader>
      <ChartCanvas>
        <Line options={options} data={data} />
      </ChartCanvas>
    </ChartWrapper>
  );

}

export default StatsChart;