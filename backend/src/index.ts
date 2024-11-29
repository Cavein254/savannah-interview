import express from "express";
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

dotenv.config().parsed;
const app = express();
app.use(cors);
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
    secret: process.env.SECRET, //openssl rand -base64 20
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

app.use("/", authRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});