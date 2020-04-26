import { NextApiRequest, NextApiResponse } from "next";

// Standard next.js api route
// See docs: https://nextjs.org/docs/api-routes/introduction
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "Hello world" }));
};
