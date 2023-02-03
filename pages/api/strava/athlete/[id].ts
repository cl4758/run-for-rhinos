import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;
  const { accessToken } = JSON.parse(req.body);
  const url = `https://www.strava.com/api/v3/athletes/${id}/stats`;


  await axios
    .get(url, { headers: { 'Authorization': `Bearer ${accessToken}` } })
    .then(({ data }) => {
      // console.log(data);
      // res.status(200).json({ data });
      res.status(200).send(data);
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
}
