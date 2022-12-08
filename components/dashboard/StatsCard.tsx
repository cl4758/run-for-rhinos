import React from 'react';
import styled from 'styled-components';

const StatsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  /* width: 18%; */
  width: 70%;
  border-width: 1px;
  border-color: white;
  /* border-style: solid; */
  height: 13vh;
  border-radius: 8px;
  background-color: #282828;

  @media (max-width: 768px) {
    width: 60%;
    align-self: center;
  }
`;

const CardHeader = styled.div`
  display: flex;
  /* padding-left: 8%; */
  text-align: center;
  /* border-bottom: 1px; */
  border-width: 0px 0 1px 0;
  border-color: black;
  border-style: solid;
  height: 40%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 0.9em;
  
  > h4 {
    margin: 0 auto 0 auto;
    justify-self: center;
    font-size: 1.1em;
  }
`;

const CardContent = styled.div`
/* background-color: #222222; */
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 60%;
  justify-content: center;
  font-size: 0.9em;
  > h4 {
    margin: 0 auto 0 auto;
    justify-self: center;
    font-size: 1.5em;
    font-weight: 800;
  }
`;

interface StatsCardProps {
  title: string,
  data: number | string,
  metric?: string;
  goal?: number;
}

function StatsCard(props: StatsCardProps) {
  return (
    <StatsCardWrapper>
      <CardHeader>{props.title}</CardHeader>
      <CardContent><h4>{props.data.toLocaleString()} {props.metric}</h4>
        {/* {props.goal ? <sub>/{props.goal} {props.metric}</sub> : <></>} */}
      </CardContent>
    </StatsCardWrapper>
  )
}

export default StatsCard;