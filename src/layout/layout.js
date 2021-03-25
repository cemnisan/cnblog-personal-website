import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chorme=1"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          httpEquiv="Content-Type"
          content="text/html"
          charset="UTF8"
        ></meta>
        <meta name="content-language" content="tr"></meta>
        <meta
          name="google-site-verification"
          content="9q3PSxnr-Wfw5_hBUIU2ZxJ-om-xosVZ6zFnZ91OQjk"
        />
        <meta name="robots" content="index,follow"></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
