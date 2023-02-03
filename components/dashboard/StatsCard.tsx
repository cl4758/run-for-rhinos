import React from 'react';
import styled from 'styled-components';

const CardHeader = styled.div`
  display: flex;
  /* padding-left: 8%; */
  text-align: center;
  /* border-bottom: 1px; */
  border-width: 0px 0 1px 0;
  border-style: solid;
  border-color: black;
  height: 40%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 0.9em;
  @media (max-width: 768px) {
    font-size: 1.1em;
    border-width: 0;
    justify-content: flex-start;
    position: relative;
    top: 10px;
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
    @media (max-width: 768px) {
      font-size: 1.6em;
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    position: relative;
    top: 7%;
  }
`;

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

  &.Averages {
     display: none;
    }

  @media (max-width: 768px) {
    height: 90%;
    width: 90%;
    &.Elevation {
      grid-row-start: 2;
      grid-row-end: 4;
      height: 95%;
    }
    &.Distance {
      grid-column-start: 2;
      grid-row-start: 1;
      grid-row-end: 3;
      height: 95%;
    }
    &.Steps {
      grid-column-start: 1;
      grid-column-end: 3;
      width: 95%;
    }
    &.AvgDistance {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      width: 95%;
    }
    &.AvgElevation {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      width: 95%;
    }
    &.AvgSteps {
      grid-row-start: 4;
      
    }
    &.AvgCalories {
      grid-row-start: 4;
    }
    &.Averages {
      grid-column-start: 1;
      grid-column-end: 3;
      width: 95%;
      background-color: inherit;
      > ${CardHeader} {
        display: none;
      }
    }
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
    <StatsCardWrapper className={props.title.replace(/\W/g, "")}>
      <CardHeader>{props.title}</CardHeader>
      <CardContent><h4>{props.data.toLocaleString()} {props.metric}</h4>
        {/* {props.goal ? <sub>/{props.goal} {props.metric}</sub> : <></>} */}
      </CardContent>
    </StatsCardWrapper>
  )
}

export default StatsCard;