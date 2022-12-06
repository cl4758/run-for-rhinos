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
      const x = process.env.ACCESS_TOKEN;
      process.env.ACCESS_TOKEN = data.access_token;
      if (x == process.env.ACCESS_TOKEN) {
        res.status(418).send('token not successfully set');
      }
      res.status(200).send('successfully refreshed access token');
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
}
