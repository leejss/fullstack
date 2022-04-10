import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";
import type { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: User) => {
    const playlists = await prisma.playlist.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: "asc",
      },
    });
    res.json(playlists);
  }
);
