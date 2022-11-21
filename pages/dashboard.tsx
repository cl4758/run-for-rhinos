import React from 'react';
import styled from 'styled-components';
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
}
]

function Dashboard() {
  return (
    <DashboardWrapper>
      <StatsBar cards={stats} />
      <StatsChart />
    </DashboardWrapper>
  )
}

export default Dashboard;