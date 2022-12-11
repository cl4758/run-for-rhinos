import React from 'react';
import styled from 'styled-components';
import StatsCard from './StatsCard';

const StatsBarWrapper = styled.div`
  margin-top: 1vh;
  display: grid;
  grid-template-rows: 0.9fr 0.9fr 0.9fr 0.9fr 0.9fr;

  /* margin-top: 3vh; */

  /* justify-content: space-between; */
  /* width: 75%; */
  /* margin-left: auto;
  margin-right: auto; */

  @media (max-width: 768px) {
    grid-template-rows: 20% 1fr 1fr 1fr;
    grid-template-columns: 50% 50%;
    padding-left: 3%;
    padding-right: 3%;
    height: 45%;
    margin-bottom: 1vh;
    padding-top: 3%;
  }
`;


interface StatsBarProps {
  cards: {
    title: string,
    data: number | string,
    metric?: string,
    goal?: number
  }[]
}

function StatsBar({ cards }: StatsBarProps) {

  const items = cards.map((card, index) => {
    return (
      <StatsCard key={card.title}
        title={card.title} data={card.data} metric={card.metric} goal={card.goal} />
    );
  });

  return (
    <StatsBarWrapper>
      {items}
    </StatsBarWrapper>
  )
}

export default StatsBar;