import { FC } from "react";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";

const MyApp: FC<any> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Sample App</title>
        <meta charSet="utf-8" />
      </Head>
      <AppProvider i18n={translations}>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
};

export default MyApp;
