import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { refreshToken } from '../../../../lib/services';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("in the activities api");
  const { id } = req.query;
  // const { accessToken } = JSON.parse(req.body);
  const url = `https://www.strava.com/api/v3/activities/${id}`;

  console.log(id);

  const refresh = await refreshToken();
  const accessToken = refresh.access_token;
  console.log(accessToken);


  await axios
    .get(url, { headers: { 'Authorization': `Bearer ${accessToken}` } })
    .then(({ data }) => {
      console.log("data from api endpoint: ", data);
      // res.status(200).json({ data });
      res.status(200).json(data);
    })
    .catch(({ err }) => {
      res.status(400).json({ err });
    });
}