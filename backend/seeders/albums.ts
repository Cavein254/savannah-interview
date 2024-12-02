import prisma from "../src/lib/prisma";
import { photos } from "../data/photos";
import { albums } from "../data/albums";

async function assignAlbumsAndPhotos() {
  try {
    const users = await prisma.user.findMany();

    for (const album of albums) {
      /** Pick a random user an assign an album */
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const createAlbum = await prisma.album.create({
        data: {
          title: album.title,
          userId: randomUser.id,
        },
      });

      /** Pick a random album an assign photos */
      const randomPhotos = photos.sort(() => 0.5 - Math.random()).slice(0, 5);
      const photoData = randomPhotos.map((photo) => ({
        title: photo.title,
        imageUrl: photo.url,
        albumId: createAlbum.id,
      }));
      await prisma.photo.createMany({
        data: photoData,
      });
    }
    console.info("Albums and Photos assigned successfully!");
  } catch (err) {
    console.error("Error assigning albums and photos:", err);
  } finally {
    await prisma.$disconnect();
  }
}

assignAlbumsAndPhotos();
