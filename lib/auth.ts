import type { JwtPayload } from "../types/api";
import prisma from "./prisma";
import jwt from "jsonwebtoken";
import type { NextApiHandler } from "next";

export const validateRoute =
  (handler: any): NextApiHandler =>
  async (req, res) => {
    const token = req.cookies.ACCESS_TOKEN;
    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello") as JwtPayload;
        user = await prisma.user.findUnique({
          where: { id },
        });
        if (!user) {
          throw new Error("Not real user");
        }
      } catch (error) {
        res.status(401);
        res.json({
          error: "Not Authorized",
        });
        return;
      }
      // waht ?
      return handler(req, res, user);
    }
    res.status(401);
    res.json({
      error: "Not Authorized",
    });
    return;
  };
