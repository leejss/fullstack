import prisma from "../../lib/prisma";
import { genSaltSync, hashSync } from "bcrypt";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

interface RequestBody {
  email: string;
  password: string;
}

// /api/singnup
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = genSaltSync();
  const { email, password } = req.body as RequestBody;
  let user;
  try {
    user = await prisma.user.create({
      data: {
        email,
        password: hashSync(password, salt),
      },
    });
  } catch (e) {
    res.status(401);
    res.json({
      error: "User already exists",
    });
    return;
  }
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
  res.json(user);
};
