// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from "mongodb";
import Activity from "../../../../lib/models/activity";
import clientPromise from '../../../../lib/utils/mongodb';

type Location = {
  end_latitude: number,
  end_longitude: number
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Location>
) {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  try {
    const activities = await db.collection("activities").find().limit(1).sort({ $natural: -1 }).project({ end_latitude: 1, end_longitude: 1, _id: 0 }).toArray() as unknown as Location[];

    res.status(200).send(activities[0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }

}
