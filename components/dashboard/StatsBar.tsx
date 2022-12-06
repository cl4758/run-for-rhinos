import React from 'react';
import styled from 'styled-components';
import StatsCard from './StatsCard';

const StatsBarWrapper = styled.div`
margin-top: 1vh;
  display: grid;
  grid-template-rows: 0.9fr 0.9fr 0.9fr 0.9fr 0.9fr 0.9fr;
  /* grid-template-columns: 0.5fr 0.8fr 0.6fr 0.7fr 0.7fr 0.7fr; */
  /* margin-top: 3vh; */

  /* justify-content: space-between; */
  /* width: 75%; */
  /* margin-left: auto;
  margin-right: auto; */

  @media (max-width: 768px) {
    flex-direction: column;
    height: 85%;
    justify-content: space-around;
    margin-top: 0;
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