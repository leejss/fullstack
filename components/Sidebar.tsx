import {
  Box,
  List,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
  ListIcon,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const navItems = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const playlist = new Array(50).fill(1).map((_, index) => `playlist - ${index}`);

const Sidebar = () => {
  return (
    <Box w="100%" h="calc(100vh - 100px)" bg="#000" paddingX="5px">
      <Box py="20px" h="100%">
        <VStack spacing="20px" align="baseline" h="100%">
          <Box w="120px" px="20px" color="#0fff">
            LOGO
          </Box>
          <Box as="nav">
            <List spacing={2}>
              {navItems.map((item) => (
                <ListItem px="20px" fontSize="16px" key={item.name}>
                  <LinkBox color="#fff">
                    <Link href={item.route} passHref>
                      <LinkOverlay>
                        <ListIcon as={item.icon} mr="20px" />
                        {item.name}
                      </LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider color="gray.800" />
          <Box flex={1} overflowY="auto" w="100%">
            <List spacing={2}>
              {playlist.map((item) => (
                <ListItem px="20px" fontSize="16px" key={item}>
                  <LinkBox color="#fff">
                    <Link href={item} passHref>
                      <LinkOverlay>
                        <ListIcon mr="20px" />
                        {item}
                      </LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
