import express from "express";
import passport from "./passport";
import prisma from "../lib/prisma";

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

authRouter.get("/api/user", async (req, res) => {
  const userData = req.cookies.user;
  if (!userData) {
    res.status(200).send(null);
  } else {
    try {
      const data = await prisma.user.findUnique({
        where: {
          email: userData.email,
        },
      });
      res.cookie("user", data);
      return res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
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
