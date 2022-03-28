import { genSaltSync } from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

// Event: Api route
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = genSaltSync();
  const {} = req.body;
  try {
  } catch (
    
  ) {}
};
