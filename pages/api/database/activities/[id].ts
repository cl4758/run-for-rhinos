import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from "mongodb";
import Activity from "../../../../lib/models/activity";
import clientPromise from '../../../../lib/utils/mongodb';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Activity | String | any>
) {
  const { method } = req;
  const { id } = req.query;

  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  await db.collection("activities").createIndex({ activity_id: 1 }, { unique: true });

  switch (method) {
    case 'GET':

      try {
        console.log(id);
        const query = { activity_id: parseInt(id as string) };
        console.log(query);
        const activity = await db.collection(process.env.COLLECTION!).find(query).toArray();

        console.log("get activity", activity);

        res.status(200).send(activity);
      } catch (error: any) {
        res.status(404).send(`Unable to find matching document with id: ${id}`);
      }
      break;

    case 'PUT':
      try {
        const bodyObject = JSON.parse(req.body);
        const query = { activity_id: parseInt(id as string) };


        console.log(bodyObject);

        const result = await db.collection(process.env.COLLECTION!).updateOne(query, { $set: bodyObject });
        console.log(result);

        result
          ? res.status(200).send(`Successfully updated activity with id ${id}`)
          : res.status(304).send(`Activity with id: ${id} not updated`);
      } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
      }
      break;
    case 'DELETE':
      try {
        const query = { activity_id: parseInt(id as string) };
        const result = await db.collection(process.env.COLLECTION!).deleteOne(query);

        if (result && result.deletedCount) {
          res.status(202).send(`Successfully removed activity with id ${id}`);
        } else if (!result) {
          res.status(400).send(`Failed to remove activity with id ${id}`);
        } else if (!result.deletedCount) {
          res.status(404).send(`Activity with id ${id} does not exist`);
        }
      } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
      }
      break;

  }
}
