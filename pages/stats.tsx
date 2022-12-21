import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import Activity from '../lib/models/activity';
import { refreshToken } from '../lib/services';
import Post from './easteregg/[params]';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const fetcher = (arg: any, ...args: any[]) => fetch(arg, ...args).then((res) => res.json())

function Stats() {
  const [name, setName] = useState('');
  const [id, setId] = useState(35558561);
  const [city, setCity] = useState('');
  const [yearlyDistance, setYearlyDistance] = useState(0);

  // const [activities, setActivities] = ;

  // const { data: result, error } = useSWR('/api/database/activities', fetcher);
  // if (error) return <h1>Something went wrong!</h1>
  // if (!result) return <h1>Loading...</h1>



  async function getAthleteStats() {

    const refresh = await refreshToken();
    const data = {
      accessToken: refresh.access_token,
    };
    console.log(data);
    const postData = async () => {
      const response = await fetch(`/api/strava/athlete/${id}`,
        {
          method: "POST",
          body: JSON.stringify(data)
        });
      return response.json();
    };

    postData().then((data) => {
      console.log(data);
      setYearlyDistance(data.ytd_run_totals.distance);
    });
  };

  async function getActivity(id: number) {
    const response = await fetch(`/api/strava/activities/${id}`);
    const activity = await response.json();
    console.log(activity);
    // await fetch(`api/strava/activities/${8139852397}`).then((activity) => {

    //   console.log(activity.json());

    const {
      distance,
      id: activity_id,
      moving_time,
      elapsed_time,
      name,
      start_date: date,
      start_latlng: [start_latitude, start_longitude],
      end_latlng: [end_latitude, end_longitude],
      map: { polyline },
      timezone,
      utc_offset,
      gear_id,
      average_speed,
      average_cadence,
      average_heartrate,
      total_elevation_gain,
      calories
    } = activity;

    const run = {
      distance,
      activity_id,
      moving_time,
      elapsed_time,
      name,
      date,
      start_latitude,
      start_longitude,
      end_latitude,
      end_longitude,
      polyline,
      timezone,
      utc_offset,
      gear_id,
      average_speed,
      average_cadence,
      average_heartrate,
      total_elevation_gain,
      calories
    };
    // console.log("run");
    // console.log(activ);
    //   return activity;
    // });
    console.log(run);
    pushActivity(run);
    return activity;
  }
  async function pushActivity(activity: Activity) {
    const response = await fetch(`/api/database/activities`, { method: "POST", body: JSON.stringify(activity) });
    const result = await response.text();
    console.log(result);
  }

  async function getTotalDistance() {
    const response = await fetch(`/api/database/activities/graph`);
    const activity = await response.json();

    console.log(activity);
  }

  function handleSubmit(event: any) {
    console.log(event);
    const activityId = event.target[0].value;
    getActivity(activityId);
    event.preventDefault();
  }

  return (
    <Wrapper>
      <h2>Strava Stats</h2>
      <p>This page will have stats</p>

      <form onSubmit={handleSubmit}>
        <input type="number" />
        <input type="submit" value="Submit" />
      </form>

      {/* <div>{athlete.firstname}</div>
      <div>{athlete.city}</div> */}
      {/* <div>{result[0].name}</div> */}
      <button onClick={getAthleteStats}>get stats</button>
      <div>{yearlyDistance / 100} kms</div>
      {/* <button onClick={getActivity}>get activity</button> */}
      <button onClick={getTotalDistance}>get total distance</button>
      <button onClick={refreshToken}>refresh</button>
      {/* <button onClick={getLocation}>location</button> */}
      {/* <button onClick={pushActivity}>push activity</button> */}
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