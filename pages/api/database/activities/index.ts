// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from "mongodb";
import { collections } from "../../../../lib/services/database.service";
import Activity from "../../../../lib/models/activity";
import clientPromise from '../../../../lib/utils/mongodb';
import { IconBorderAll } from '@tabler/icons';

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
        const activities = await db.collection("activities").find({}).toArray() as unknown as Activity[];

        res.status(200).send(activities);
      } catch (error: any) {
        res.status(500).send(error.message);
      }
      break;
    case 'POST':
      try {
        const bodyObject = JSON.parse(req.body);

        console.log(bodyObject);

        const result = await db.collection("activities").insertOne(bodyObject);
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
