import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import cookieParser from "cookie-parser";

/** database stuff **/
import session from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { PrismaClient } from "@prisma/client";

/** routes */
import authRouter from "./routes/auth.routes";
import apiRouter from "./routes/api.routes";

dotenv.config().parsed;
const app = express();
app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
    secret: process.env.SECRET as string, //openssl rand -base64 20
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Savannah Interview API",
  });
});
app.use("/", authRouter);
app.use("/api", apiRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
