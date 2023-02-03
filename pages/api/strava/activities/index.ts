import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const url = 'https://www.strava.com/api/v3/activities/';

  console.log("in athlete api");

  await axios
    .get(url, { headers: { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN!}` } })
    .then(({ data }) => {
      console.log("data from api endpoint: ", data);
      // res.status(200).json({ data });
      res.status(200).send(data);
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
}