import React, { useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import StatsBar from '../components/dashboard/StatsBar';
import StatsChart from '../components/dashboard/StatsChart';

const DashboardWrapper = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const stats = [{
  title: 'Day',
  data: 3,
  goal: 90
}, {
  title: 'Distance',
  data: 98,
  metric: 'miles',
  goal: 3078
}, {
  title: 'Elevation',
  data: 3987,
  metric: 'ft'
}, {
  title: 'Steps',
  data: 123456
}];

const fetcher = (arg: any, ...args: any[]) => fetch(arg, ...args).then((res) => res.json());

function Dashboard({ totals, graph }: { totals: any, graph: any }) {
  // const { data, error } = useSWR('/api/database/activities', fetcher);
  // const [day, setDay] = useState(data.length);
  // const [distance, setDistance] = useState(data[0].distance);
  // const [elevation, setElevation] = useState(data[0].total_elevation_gain);
  // const [steps, setSteps] = useState(data[0].average_cadence * 2 * data[0].moving_time / 60);

  const statistics = [{
    title: 'Day',
    data: totals.day,
    goal: 90
  }, {
    title: 'Distance',
    data: totals.distance,
    metric: 'miles',
    goal: 3078
  }, {
    title: 'Elevation',
    data: totals.elevation,
    metric: 'ft'
  }, {
    title: 'Steps',
    data: totals.steps
  }, {
    title: 'Calories',
    data: totals.calories
  }];


  if (!totals) return <h1>Loading...</h1>
  return (
    <DashboardWrapper>
      <StatsBar cards={statistics} />
      <StatsChart distances={graph.distances} elevations={graph.elevations} dates={graph.dates} />
    </DashboardWrapper>
  )
}

export async function getStaticProps() {
  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://run-for-rhinos.vercel.app';

  const sumRes = await fetch(`${server}/api/database/activities/sum`);
  const sumData = await sumRes.json();

  const graphRes = await fetch(`${server}/api/database/activities/graph`);
  const graphData = await graphRes.json();

  return {
    props: {
      totals: {
        day: sumData.days,
        distance: (sumData.total_distance / 1000 / 1.6).toFixed(2),
        elevation: sumData.total_elevation * 3.28,
        steps: Math.round(sumData.total_steps),
        calories: sumData.total_calories
      },
      graph: {
        distances: graphData.distances.map((d: number) => (d / 1000 / 1.6).toFixed(2)),
        elevations: graphData.elevations.map((e: number) => (e * 3.28).toFixed(2)),
        dates: graphData.dates.map((date: string) => new Date(new Date(date).toDateString()).toISOString())
      }

    }
  }

}
export default Dashboard;