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

apiRouter.get("/photo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const photo = await prisma.photo.findUnique({
      where: { id },
      include: {
        album: true,
      },
    });
    res.status(200).send({
      success: true,
      data: photo,
    });
  } catch (err) {
    console.error(err);
    res.status(501).send({
      success: false,
      message: "Error! unable to complete request",
    });
  }
});

apiRouter.put("/photo/", async (req, res) => {
  const { id, title } = req.body;
  if (!id || !title) {
    res
      .status(400)
      .send({ success: false, message: "Missing photoId or Title" });
  }
  try {
    const photo = await prisma.photo.update({
      where: { id },
      data: {
        title,
      },
    });
    res.status(200).send({
      success: true,
      data: photo,
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

apiRouter.get("/logout", (req, res) => {
  res.clearCookie("connect.sid");
  req.session?.destroy((err) => {
    if (err) {
      throw new Error(err);
    }
    res.redirect(process.env.FRONTEND_REDIRECT_URL as string);
  });
});

export default apiRouter;
