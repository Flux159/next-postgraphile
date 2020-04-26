import { NextApiRequest, NextApiResponse } from "next";

import postgraphile from "../../src/server/postgraphile";
import runMiddleware from "../../src/server/runMiddleware";

// GraphQL route that handles queries
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  await runMiddleware(req, res, postgraphile);
  res.end();
};

export const config = {
    api: {
      bodyParser: false,
    },
}
