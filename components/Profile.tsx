import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface ProfileProps {
  name: string;
  imgSrc: string;
  description: string;
  bg: string;
}

const Profile = ({ description, imgSrc, name, bg }: ProfileProps) => {
  return (
    <Flex padding="40px" align="end" bg={bg}>
      <Box p="20px">
        <Image boxSize="160px" boxShadow="2xl" src={imgSrc} objectFit="cover" />
      </Box>
      <Box p="20px" lineHeight="40px" color="white">
        <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
          Profile
        </Text>
        <Text fontSize="6xl">{name}</Text>
        <Text fontSize="x-small">{description}</Text>
      </Box>
    </Flex>
  );
};

export default Profile;
