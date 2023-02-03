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

  async function connectToDb() {
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? 'http://localhost:3000' : 'https://run-for-rhinos.vercel.app';
    const sumRes = await fetch(`${server}/api/database/activities/sum`);
    const sumData = await sumRes.json();
    console.log(sumData);
  }

  return (
    <Wrapper>
      <h2>Strava Stats</h2>
      <p>This page will have stats</p>

      <form onSubmit={handleSubmit}>
        <input type="number" />
        <input type="submit" value="Submit" />
      </form>

      <button onClick={getAthleteStats}>get stats</button>
      <div>{yearlyDistance / 100} kms</div>
      <button onClick={getTotalDistance}>get total distance</button>
      <button onClick={refreshToken}>refresh</button>
      <button onClick={connectToDb}>connect</button>
    </Wrapper>
  );
}

export default Stats;