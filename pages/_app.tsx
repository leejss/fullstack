import { Layout } from "../components";
import fetcher from "../lib/fetcher";
import theme from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import type { SWRConfiguration } from "swr";

type MyComponent = {
  pageType: "auth";
};

type MyAppProps = {
  Component: MyComponent;
};

const swrOption: SWRConfiguration = {
  revalidateOnFocus: false,
  fetcher,
};

function MyApp({ Component, pageProps }: AppProps<MyAppProps> & MyAppProps) {
  return (
    <SWRConfig value={swrOption}>
      <ChakraProvider theme={theme}>
        {Component.pageType === "auth" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;

// 1. Per page layout
