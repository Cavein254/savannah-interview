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
    name: user.name,
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
      const existingUser = await prisma.user.findUnique({
        where: { email: profile.emails![0].value },
      });

      if (existingUser) {
        const updateUser = await prisma.user.update({
          where: { email: profile.emails![0].value },
          data: {
            username: existingUser.username
              ? existingUser.username
              : profile.displayName,
          },
        });
        return done(null, updateUser);
      } else {
        const newUser = await prisma.user.create({
          data: {
            email: profile.emails![0].value,
            name: profile.displayName,
            username: profile.displayName,
            image: profile.photos![0].value,
          },
        });
        return done(null, newUser);
      }
    }
  )
);

export default passport;
