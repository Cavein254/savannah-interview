import express from "express";
import prisma from "../lib/prisma";

const apiRouter = express.Router();

apiRouter.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        albums: true,
      },
    });
    res.status(200).send({
      success: true,
      data: users,
    });
  } catch (err) {
    console.error(err);
    res.status(501).send({
      success: false,
      message: "Error! unable to complete request",
    });
  }
});

apiRouter.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        albums: true,
      },
    });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(501).send({
      success: false,
      message: "Error! unable to complete request",
    });
  }
});

apiRouter.get("/albums", async (req, res) => {
  try {
    const albums = await prisma.album.findMany({
      include: {
        photos: true,
      },
    });
    res.status(200).send({
      success: true,
      data: albums,
    });
  } catch (err) {
    console.error(err);
    res.status(501).send({
      success: false,
      message: "Error! unable to complete request",
    });
  }
});

apiRouter.get("/photos", async (req, res) => {
  try {
    const photos = await prisma.photo.findMany();
    res.status(200).send({
      success: true,
      data: photos,
    });
  } catch (err) {
    console.error(err);
    res.status(501).send({
      success: false,
      message: "Error! unable to complete request",
    });
  }
});

apiRouter.get("/users_albums", async (req, res) => {
  try {
    const usersAlbums = await prisma.user.findMany({
      include: {
        albums: true,
      },
    });
    res.status(200).send({
      success: true,
      data: usersAlbums,
    });
  } catch (err) {
    console.error(err);
    res.status(501).send({
      success: false,
      message: "Error! unable to complete request",
    });
  }
});

apiRouter.get("/album/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const album = await prisma.album.findUnique({
      where: {
        id,
      },
      include: {
        photos: true,
      },
    });
    res.status(200).send({
      success: true,
      data: album,
    });
  } catch (err) {
    console.error(err);
    res.status(501).send({
      success: false,
      message: "Error! unable to complete request",
    });
  }
});

apiRouter.get("/user/me", async (req, res) => {
  const userData = req?.user;
  if (!userData) {
    res.status(200).send(null);
  } else {
    try {
      const data = await prisma.user.findUnique({
        where: {
          id: userData.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          username: true,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

export default apiRouter;
