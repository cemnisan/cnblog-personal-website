import Head from "next/head";
import Layout from "../layout/layout";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../components/Contact/components/contact/Contact"), { ssr: false });

function MainContact() {
  return (
    <Layout>
      <Head>
        <title>CNBlog | İletişim</title>
        <meta
          name="description"
          content="CNBlog iletişim sayfasından bizimle kolay bir şekilde iletişime geçebilirsiniz."
        ></meta>
        <meta property="og:title" content="CNBlog | İletişim"></meta>
        <meta
          property="og:description"
          content="CNBlog iletişim sayfasından bizimle kolay bir şekilde iletişime geçebilirsiniz."
        ></meta>
        <link rel="canonical" href="https://cnblog.vercel.app/contact"></link>
      </Head>
      <Contact />
    </Layout>
  );
}

export default MainContact;
