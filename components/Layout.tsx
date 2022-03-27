import Sidebar from "./Sidebar";
import { Box } from "@chakra-ui/react";
import type { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box pos="absolute" top="0" left="0" w="250px" backgroundColor="#000">
        <Sidebar />
      </Box>
      <Box ml="250px">{children}</Box>
      <Box pos="absolute" left="0" bottom="0"></Box>
    </Box>
  );
};

export default Layout;
