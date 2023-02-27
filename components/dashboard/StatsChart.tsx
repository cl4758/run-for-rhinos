import React from 'react';
import styled from 'styled-components';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-luxon';
import { Line, Bar } from 'react-chartjs-2';

const ChartWrapper = styled.div`
  display: flex;
  /* justify-content: center;
  align-content: center; */
  align-items: center;
  width: 95%;
  height: 77%;
  flex-direction: column;
  padding-top: 1vh;
  margin-left: 0;
  margin-right: auto;
  background-color: #282828;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: 50%;
    width: 90%;
    margin-top: 4vh;
    margin: 0 auto 10% auto;
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
    font-size: 1.1em;
  }
`;

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
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
    tooltip: {
      callbacks: {
        label: (data: any) => {
          return data.dataset.label == 'Elevation' ? `${data.formattedValue} ft` : `${data.formattedValue} mi`;
        }
      }
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'date'
      },
      type: 'time' as const,
      time: {
        unit: 'day',
        tooltipFormat: 'DD'
      } as const,
      adapters: {
        date: {
          zone: 'America/New_York',
        },
      },
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


interface StatsChartProps {
  distances: [],
  elevations: [],
  dates: []

}

function StatsChart({ distances, elevations, dates }: StatsChartProps) {

  const labels = dates;

  const data = {
    labels,
    datasets: [
      {
        label: 'Distance',
        data: distances,
        borderColor: '##7cc7ef',
        backgroundColor: '#9ad5f4',
        yAxisID: 'y',
      },
      {
        label: 'Elevation',
        data: elevations,
        borderColor: '#f7c655',
        backgroundColor: '#f9d47f',
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
        {/* <Line options={options} data={data} /> */}
        <Bar options={options} data={data} />
      </ChartCanvas>
    </ChartWrapper>
  );

}

export default StatsChart;