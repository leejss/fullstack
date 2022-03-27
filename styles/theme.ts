import type { RecursivePartial } from "../types/utils";
import type { Theme, ThemeComponents } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const components: ThemeComponents = {
  Button: {},
};

const myTheme: RecursivePartial<Theme> = {
  colors: {
    gray: {
      "50": "#F3F1F1",
      "100": "#DED9D9",
      "200": "#C8C0C0",
      "300": "#B3A8A8",
      "400": "#9D8F8F",
      "500": "#887777",
      "600": "#6D5F5F",
      "700": "#524747",
      "800": "#363030",
      "900": "#1B1818",
    },
  },
  components,
};

const theme = extendTheme(myTheme);

export default theme;
