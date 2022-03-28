import { artistsData } from "./songData";
import { PrismaClient } from "@prisma/client";
import { genSaltSync, hashSync } from "bcrypt";

const prisma = new PrismaClient();

const run = async () => {
  // Seed Artists and songs
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        // Nested insert
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              title: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      });
    })
  );
  // Seed user
  const salt = genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "test@email.com" },
    update: {},
    create: {
      email: "test@email.com",
      password: hashSync("password", salt),
    },
  });
  // return records as array
  const songs = await prisma.song.findMany(); // with no arguments
  // where => 특정 조건에 맞는 record를 가져온다.

  // create dummy playlist records
  await Promise.all(
    new Array(10).fill(1).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `playlist - ${i}`,
          // Nested Query
          user: {
            // Connect to a existing record
            connect: { id: user.id },
          },
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
