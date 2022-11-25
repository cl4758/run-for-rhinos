import axios from 'axios';
import Activity from './models/activity';

const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'https://run-for-rhinos.vercel.app';

export async function getActivities() {
  console.log('getting activities');
  const activities = await fetch(`/api/strava/activities/`);
  return activities;
}

export async function getActivityById(id: number) {
  console.log('getting activity by id');
  const activity = await fetch(`${server}/api/strava/activities/${id}`);
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