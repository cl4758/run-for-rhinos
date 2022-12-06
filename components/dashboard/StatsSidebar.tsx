import React from 'react';
import styled from 'styled-components';
import StatsCard from './StatsCard';

const StatsBarWrapper = styled.div`
  /* display: grid; */
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  /* justify-content: space-between; */
  /* width: 75%; */
  /* margin-left: auto;
  margin-right: auto; */
  margin-top: 1vh;
  margin-left: 0.5vw;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 85%;
    justify-content: space-around;
    margin-top: 0;
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  /* width: 18%; */
  width: 90%;
  border-width: 1px;
  border-color: white;
  /* border-style: solid; */
  height: 80%;
  border-radius: 8px;
  background-color: #282828;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 60%;
    align-self: center;
  }
`;

const StatsHeader = styled.div`
  display: flex;
  text-align: center;
  /* border-bottom: 1px; */
  /* border-width: 0px 0 1px 0; */
  /* border-color: black; */
  /* border-style: solid; */
  /* height: 50%; */
  justify-content: center;
  align-content: center;
  flex-direction: column;
  > h4 {
    margin: 0 auto 0 auto;
    justify-self: center;
    font-size: 1em;
  }
`;

const StatsContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* height: 60%; */
  justify-content: center;
  font-size: 0.8em;
`;


interface StatsBarProps {
  cards: {
    title: string,
    data: number | string,
    metric?: string,
    goal?: number
  }[]
}

function StatsSidebar({ cards }: StatsBarProps) {

  const items = cards.map((card, index) => {
    return (
      // <StatsCard key={card.title}
      //   title={card.title} data={card.data} metric={card.metric} goal={card.goal} />
      <div key={card.title}>
        <StatsHeader><h4>{card.title}</h4></StatsHeader>
        <StatsContent>{card.data} {card.metric} </StatsContent>
      </div>
    );
  });

  return (
    <StatsBarWrapper>
      <StatsWrapper>
        {items}
      </StatsWrapper>
    </StatsBarWrapper>
  )
}

export default StatsSidebar;