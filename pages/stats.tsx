import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Stats() {
  const [name, setName] = useState('');
  const [id, setId] = useState(0);
  const [yearlyDistance, setYearlyDistance] = useState(0);
  const getAthlete = () => {
    const postData = async () => {
      const response = await fetch("/api/strava/athlete", {
        method: "GET",
      });
      return response.json();
    };

    postData().then((data) => {
      console.log(data);
      setId(data.id);
      setName(`${data.firstname} ${data.lastname}`);
      // alert(data.name);
    });
  };

  const getAthleteStats = () => {
    const postData = async () => {
      const response = await fetch(`/api/strava/athlete/${id}`, {
        method: "GET",
      });
      return response.json();
    };

    postData().then((data) => {
      console.log(data);
      setYearlyDistance(data.ytd_run_totals.distance);
    });
  };



  return (
    <Wrapper>
      <h2>Strava Stats</h2>
      <p>This page will have stats</p>
      <button onClick={getAthlete}>Click me ;)</button>
      <div>{name}</div>
      <button onClick={getAthleteStats}>get stats</button>
      <div>{yearlyDistance / 100} kms</div>
    </Wrapper>
  );
}

export default Stats;