import Ably from "ably/promises";

export default async function handler(req, res) {
    const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    res.status(200).json(tokenRequestData);
};

// import type { NextApiRequest, NextApiResponse } from 'next'

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
