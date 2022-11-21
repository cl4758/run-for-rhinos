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
  title: 'Days',
  data: 3
}, {
  title: 'Distance',
  data: 98,
  metric: 'miles'
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