import { Layout } from "../components";
import theme from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

type MyComponent = {
  pageType: "auth";
};

type MyAppProps = {
  Component: MyComponent;
};

function MyApp({ Component, pageProps }: AppProps<MyAppProps> & MyAppProps) {
  return (
    <ChakraProvider theme={theme}>
      {Component.pageType === "auth" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ChakraProvider>
  );
}

export default MyApp;

// 1. Per page layout
