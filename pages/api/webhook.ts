import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiRequestQuery } from 'next/dist/server/api-utils';
import { getActivityById, pushActivityToDatabase, updateActivityToDatabase } from '../../lib/services';

interface SubscriptionEvent {
  object_type: 'activity' | 'athlete'
  object_id: number
  aspect_type: 'create' | 'update' | 'delete'
  updates: {
    title?: string
    type?: string
    private?: boolean
    authorized?: false
  }
  owner_id: number
  subscription_id: number
  event_time: number
}

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      body,
      query,
    }: { body: SubscriptionEvent; query: NextApiRequestQuery } = req;

    console.log("in the webhook");

    if (query['hub.mode'] === 'subscribe') {
      return res.json({
        'hub.challenge': query['hub.challenge'],
      });
    };

    const { aspect_type, object_id, object_type } = body;

    if (aspect_type === 'create' && object_type === 'activity') {
      console.log("create");

      const activity = await getActivityById(object_id);

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

      console.log("run: ", run);

      const response = await pushActivityToDatabase(run);

      console.log("end");

      return res
        .status(201)
        .json({ message: `run successfully added` });

    } else if (aspect_type === 'update' && object_type === 'activity') {
      console.log("update activity");

      const activity = await getActivityById(object_id);

      console.log("activity: ", activity);

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

      const response = await updateActivityToDatabase(run);

      console.log(response);

      return res
        .status(201)
        .json({ message: `run successfully added` })
    }

    return res.json({ message: 'nothing to do here' })
  } catch (error: any) {
    if (error.status === 404) {
      return res.status(404).json({ message: 'activity not found' })
    }

    return res.status(500).json({ message: error.message })
  }
}

export default webhook