import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Stats() {
  const [name, setName] = useState('');
  const [id, setId] = useState(35558561);
  const [city, setCity] = useState('');
  const [yearlyDistance, setYearlyDistance] = useState(0);



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

      {/* <div>{athlete.firstname}</div>
      <div>{athlete.city}</div> */}
      <button onClick={getAthleteStats}>get stats</button>
      <div>{yearlyDistance / 100} kms</div>
      {/* <button onClick={getActivity}>get stats</button> */}
    </Wrapper>
  );
}

// export async function getStaticProps() {

//   const server = 'http://localhost:3000';

//   const res = await fetch(`${server}/api/strava/athlete`);
//   const stats = await res.json();

//   process.env.ACCESS_TOKEN = 'acdf263dfd8e2aea6dfc8e466554f7a0aa7616f4';

//   return {
//     props: {
//       stats
//     }
//   }
// }

export default Stats;