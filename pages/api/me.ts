import { validateRoute } from "../../lib/auth";
import type { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const me = validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: User) => {
    res.json(user);
  }
);

export default me;
