import type { JwtPayload } from "../types/api";
import prisma from "./prisma";
import jwt from "jsonwebtoken";
import type { NextApiHandler } from "next";

// It returns NextApiHandler
export const validateRoute =
  (fn: any): NextApiHandler =>
  async (req, res) => {
    // 👇🏻 some validate process

    // 1. get token from the cookies
    const token = req.cookies.ACCESS_TOKEN;
    if (token) {
      let user;
      try {
        // 2. verify the token
        const { id } = jwt.verify(token, "hello") as JwtPayload;

        // 3. Search user in the database
        user = await prisma.user.findUnique({
          where: { id },
        });

        // 4.1. Not found user => invalid
        if (!user) {
          throw new Error("Invalid User");
        }
      } catch (error) {
        // 4.2. Some error -> Invalid
        res.status(401);
        res.json({
          error: "Not Authorized",
        });
        return;
      }

      // 5. then, invoke the input function
      // Call input function and pass the parameters
      return fn(req, res, user);
    }
    res.status(401);
    res.json({
      error: "Not Authorized",
    });
    return;
  };
