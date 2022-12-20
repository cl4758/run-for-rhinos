import axios from 'axios';
import Activity from './models/activity';

const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'https://run-for-rhinos.vercel.app';

export async function refreshToken() {
  console.log('refreshing access token');
  const refresh = await fetch(`${server}/api/refresh`);
  const result = refresh.json();
  return result;
}

export async function getActivities() {
  console.log('getting activities');
  const activities = await fetch(`/api/strava/activities/`);
  return activities;
}

export async function getActivityById(id: number) {
  const refresh = await refreshToken();
  const data = {
    accessToken: refresh.access_token,
  };
  console.log('getting activity by id');
  const activity = await fetch(`${server}/api/strava/activities/${id}`, {
    method: "POST",
    body: JSON.stringify(data)
  });
  const result = activity.json();
  return result;
}

export async function pushActivityToDatabase(activity: any) {
  const response = await fetch(`${server}/api/database/activities`, { method: "POST", body: JSON.stringify(activity) });
  const result = await response.text();
  return result;
}

export async function updateActivityToDatabase(activity: any) {
  const { activity_id } = activity;
  const response = await fetch(`${server}/api/database/activities/${activity_id}`, { method: "PUT", body: JSON.stringify(activity) });
  const result = await response.text();
  return result;
}

export async function getLocation(location: { end_longitude: number, end_latitude: number }) {
  const mapbox_token = 'pk.eyJ1IjoiY2hyaXN0aW5lbGFpMDAiLCJhIjoiY2xhYnFramVvMDJzODN3bXU4NDBnYW5obyJ9.MXroMmxiw0sNHpwHFu7rxw';

  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.end_longitude},${location.end_latitude}.json?types=place&access_token=${mapbox_token}`);
  const result = await response.json();
  console.log(result);
  const place = result.features[0] ? result.features[0].place_name : "??";
  return place;
}