import passport from "../auth/passport";
import prisma from "../lib/prisma";
import express, { Request, Response } from "express";

const authRouter = express.Router();

authRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.LOGIN_URL as string,
  })
);

authRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.LOGIN_URL as string,
  }),
  (req, res) => {
    res.cookie("user", req.user);
    res.redirect(process.env.FRONTEND_REDIRECT_URL as string);
  }
);
// @ts-ignore
authRouter.get("/api/user", async (req: Request, res: Response) => {
  const userData = req.cookies?.user;
  if (!userData) {
    return res.status(200).send(null);
  }

  try {
    const data = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });
    if (data) {
      res.cookie("user", data);
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

authRouter.get("/logout", (req, res) => {
  res.clearCookie("user");
  req.session?.destroy((err) => {
    if (err) {
      throw new Error(err);
    }
    res.redirect(process.env.FRONTEND_REDIRECT_URL as string);
  });
});
export default authRouter;
