import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from "mongodb";
import Activity from "../../../../lib/models/activity";
import clientPromise from '../../../../lib/utils/mongodb';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Activity[] | String>
) {
  const { method } = req;

  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  switch (method) {
    case 'GET':
      try {
        const activities = await db.collection(process.env.COLLECTION!).find({}).toArray() as unknown as Activity[];

        res.status(200).send(activities);
      } catch (error: any) {
        res.status(500).send(error.message);
      }
      break;
    case 'POST':
      try {
        const bodyObject = JSON.parse(req.body);

        console.log(bodyObject);
        await db.collection(process.env.COLLECTION!).createIndex({ activity_id: 1 }, { unique: true });
        const result = await db.collection(process.env.COLLECTION!).insertOne(bodyObject);
        result
          ? res.status(201).send(`Successfully created a new activity with id ${result.insertedId}`)
          : res.status(500).send("Failed to create a new activity.");
      } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
      }
      break;

  }

}
