import dotenv from "dotenv";
dotenv.config().parsed;
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

passport.serializeUser((user: any, done) => {
  done(null, {
    id: user.id,
    username: user.username,
    image: user.avatar,
    email: user.email,
  });
});

passport.deserializeUser(async (user: any, done) => {
  const { id } = user;
  const dbuser = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  done(null, dbuser);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: process.env.GOOGLE_CALLBACK_URL as string,
    },
    async (accessToken: any, refreshToken: any, profile: any, done: any) => {
      const user = await prisma.user.upsert({
        where: {
          email: profile.emails![0].value,
        },
        update: {},
        create: {
          email: profile.emails![0].value,
          name: profile.displayName,
          username: profile.displayName,
          image: profile.photos![0].value,
        },
      });
      return done(null, user);
    }
  )
);

export default passport;
