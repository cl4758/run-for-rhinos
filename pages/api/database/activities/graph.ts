// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from "mongodb";
import { collections } from "../../../../lib/services/database.service";
import Activity from "../../../../lib/models/activity";
import clientPromise from '../../../../lib/utils/mongodb';
import { IconBorderAll } from '@tabler/icons';

type Totals = {
  _id: string,
  days: number,
  total_distance: number,
  total_elevation: number,
  total_steps: number
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  try {

    const activities = await db.collection("activities").aggregate([
      { $group: { _id: null, distances: { $push: '$distance' }, elevations: { $push: '$total_elevation_gain' } } },
      { $project: { _id: 0, distances: 1, elevations: 1 } }
    ]).toArray();
    console.log(activities);

    res.status(200).send(activities[0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }

}
