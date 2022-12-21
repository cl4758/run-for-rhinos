// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from "mongodb";
import Activity from "../../../../lib/models/activity";
import clientPromise from '../../../../lib/utils/mongodb';

type Totals = {
  _id: string,
  days: number,
  total_distance: number,
  total_elevation: number,
  total_steps: number
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Totals>
) {
  const client = await clientPromise;
  const db = client.db("activitiesDB");


  try {

    const activities = await db.collection("activities").aggregate(
      [{
        $group:
        {
          _id: null,
          days: { $sum: 1 },
          total_distance: { $sum: "$distance" },
          total_elevation: { $sum: "$total_elevation_gain" },
          total_steps: { $sum: { $multiply: ["$average_cadence", 2, "$moving_time", 1 / 60] } },
          total_calories: { $sum: "$calories" },
        }
      }]).toArray() as unknown as Totals[];
    console.log(activities[0]);

    res.status(200).json(activities[0]);
  } catch (error: any) {
    res.status(500).json(error.message);
  }

}
