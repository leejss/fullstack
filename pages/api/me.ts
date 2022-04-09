import { validateRoute } from "../../lib/auth";
import type { NextApiRequest, NextApiResponse } from "next";

const me = validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    res.json(user);
  }
);

export default me;
