import { GradientBackground, Profile } from "../components";
import prisma from "../lib/prisma";
import { Box } from "@chakra-ui/react";
import type { Artist } from "@prisma/client";
import type { GetServerSideProps } from "next";

interface HomeProps {
  artists: Artist[];
}

const src =
  "https://assets.vogue.com/photos/5edff734351d9f5c45632506/2:3/w_2058,h_3087,c_limit/01_Samuel_Ross_Portrait_June_2020.jpg";

const Home = ({ artists }: HomeProps) => {
  return (
    <Box h="100%" overflowY="auto" pos="relative">
      <Profile
        bg="blue"
        imgSrc={src}
        name="Samuel Ross"
        description="Fashin Designer"
      />
      <Box>hello</Box>
      <GradientBackground color="blue" />
    </Box>
  );
};

// export async function
export const getServerSideProps: GetServerSideProps = async (context) => {
  const artists = await prisma.artist.findMany();

  return {
    props: {
      artists,
    },
  };
};

export default Home;
