import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const url = 'https://www.strava.com/api/v3/athlete';

  console.log("in athlete api");

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "Authorization": "2a036e7349835df41968e49329e14c839007cc7e"
  //   }
  // };

  // await fetch(url, options)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     res.json(data);
  //   });

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

// export async function getStaticProps() {
//   const options = {
//     method: "GET",
//     headers: new Headers({'content-type': 'application/json'}),
//     mode: 'no-cors'
// };
//   const res = await
//   fetch("https://www.strava.com/api/v3/athlete");
//   const allPostsData = await res.json();
//   return {
//       props: {
//           allPostsData,
//       },
//       revalidate: 30,
//   };
// }