import React from 'react';
import styled from 'styled-components';
import StatsCard from './StatsCard';

const StatsBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 3vh;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    margin-top: 0%;
  }
`;


interface StatsBarProps {
  cards: {
    title: string,
    data: number,
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