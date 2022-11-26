import { ObjectId } from "mongodb";

export default class Activity {
  constructor(
    public distance: number,
    public activity_id: number,
    public moving_time: number,
    public elapsed_time: number,
    public name: string,
    public date: Date,
    public start_latitude: number,
    public start_longitude: number,
    public polyline: string,
    public timezone: string,
    public utc_offset: number,
    public gear_id: number,
    public average_speed: number,
    public average_cadence: number,
    public average_heartrate: number,
    public total_elevation_gain: number,
    public calories: number,
    public id?: ObjectId,
  ) { }
}