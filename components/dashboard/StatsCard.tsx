import React from 'react';
import styled from 'styled-components';

const StatsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  border-width: 1px;
  border-color: white;
  /* border-style: solid; */
  height: 13vh;
  border-radius: 10px;
  background-color: #282828;

  @media (max-width: 768px) {
    width: 60%;
    align-self: center;
  }
`;

const CardHeader = styled.div`
  display: flex;
  text-align: center;
  /* border-bottom: 1px; */
  border-width: 0px 0 2px 0;
  border-color: #404040;
  border-style: solid;
  height: 40%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  > h4 {
    margin: 0 auto 0 auto;
    justify-self: center;
    font-size: 1.3em;
    font-weight: 500;
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
  goal?: number;
}

function StatsCard(props: StatsCardProps) {
  return (
    <StatsCardWrapper>
      <CardHeader><h4>{props.title}</h4></CardHeader>
      <CardContent>{props.data.toLocaleString()} {props.metric}
        {/* {props.goal ? <sub>/{props.goal} {props.metric}</sub> : <></>} */}
      </CardContent>
    </StatsCardWrapper>
  )
}

export default StatsCard;