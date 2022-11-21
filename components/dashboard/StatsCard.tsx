import React from 'react';
import styled from 'styled-components';

const StatsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  border-width: 1px;
  border-color: white;
  border-style: solid;
  height: 13vh;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 50%;
    align-self: center;
  }
`;

const CardHeader = styled.div`
  display: flex;
  text-align: center;
  /* border-bottom: 1px; */
  border-width: 0px 0 2px 0;
  border-color: white;
  border-style: solid;
  height: 40%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  > h4 {
    margin: 0 auto 0 auto;
    justify-self: center;
    font-size: 1.3em;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 60%;
  justify-content: center;
`;

interface StatsCardProps {
  title: string,
  data: number,
  metric?: string;
}

function StatsCard(props: StatsCardProps) {
  return (
    <StatsCardWrapper>
      <CardHeader><h4>{props.title}</h4></CardHeader>
      <CardContent>{props.data} {props.metric}</CardContent>
    </StatsCardWrapper>
  )
}

export default StatsCard;