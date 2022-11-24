// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from "mongodb";
import { collections } from "../../../../lib/services/database.service";
import Activity from "../../../../lib/models/activity";
import clientPromise from '../../../../lib/utils/mongodb';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Activity | String>
) {
  const { method } = req;
  const { id } = req.query;

  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  switch (method) {
    case 'GET':
      // try {
      //   const query = { _id: new ObjectId(parseInt(id as string)) };
      //   const activity = (await collections.activities?.find(query)) as unknown as Activity;

      //   res.status(200).send(activity);
      // } catch (error: any) {
      // }

      try {
        const query = { _id: new ObjectId(parseInt(id as string)) };
        const activity = await db.collection("activities").find(query) as unknown as Activity;

        res.status(200).send(activity);
      } catch (error: any) {
        res.status(404).send(`Unable to find matching document with id: ${id}`);
      }
      break;
    case 'PUT':
      try {
        const updatedActivity: Activity = req.body as Activity;
        const query = { _id: new ObjectId(parseInt(id as string)) };

        const result = await collections.activities?.updateOne(query, { $set: updatedActivity });

        result
          ? res.status(200).send(`Successfully updated activity with id ${id}`)
          : res.status(304).send(`Activity with id: ${id} not updated`);
      } catch (error: any) {
        console.error(error.message);
        res.status(400).send(error.message);
      }
    case 'DELETE':
      try {
        const query = { _id: new ObjectId(parseInt(id as string)) };
        const result = await collections.activities?.deleteOne(query);

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

  }
}
