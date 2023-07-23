import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../provider/store";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";
import Script from "next/script";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import * as gtag from "../utils/gtag";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div style={{ backgroundColor: "white" }}>
      <Head>
        <title>Dapplabx</title>
        <meta
          name="description"
          content="Dapplapxs is a blockchain product information blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_ANALYTICS_ID}`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.REACT_APP_ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ReactNotifications />
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
