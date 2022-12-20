import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log(req.method);
  const url = `https://www.strava.com/oauth/token`;

  const params = {
    refresh_token: process.env.REFRESH_TOKEN,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    grant_type: 'refresh_token'
  };

  await axios
    .post(url, {}, { params })
    .then(({ data }) => {
      process.env.ACCESS_TOKEN = data.access_token;
      res.status(200).json(data);
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
}
