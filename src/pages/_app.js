import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";
import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import { Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import * as gtag from "../utilities/gtag";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

//ProgressBar import
const TopProgressBar = dynamic(
  () => {
    return import("../utilities/TopProgressBar");
  },
  { ssr: false }
);

/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */
config.autoAddCss = false;
library.add(fab, faEnvelope);

export default function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routerChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routerChangeComplete", handleRouterChange);
    };

  }, [router.events]);

  return (
    <Auth0Provider
      domain={`${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`}
      clientId={`${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}`}
      redirectUri={`${process.env.NEXT_PUBLIC_AUTH0_URL}`}
    >
      <TopProgressBar/>
      <Component {...pageProps} />
    </Auth0Provider>
  );

}
