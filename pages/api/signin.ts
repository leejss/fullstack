import prisma from "../../lib/prisma";
import { compareSync } from "bcrypt";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body as { email: string; password: string };
  console.log("running signin");

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user && compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      "hello",
      {
        expiresIn: "8h",
      }
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );
    res.status(200);
    res.json(user);
  } else {
    res.status(401);
    res.json({
      error: "No user",
    });
  }
};
