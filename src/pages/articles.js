import unfecth from "isomorphic-fetch";
import Head from "next/head";
import Layout from "../layout/layout";
import { Article } from "../components/Articles/";

function Articles({ articles }) {
  return (
    <Layout>
      <Head>
        <title>CNBlog | Tüm Makaleler</title>
        <meta
          name="description"
          content="CNBlog makaleler kısmını inceleyerek, yazılım üzerine yazılmış bazı kişisel makaleleri okuyup, bilgiler edinebilirsiniz."
        ></meta>

        {/* Facebook */}
        <meta property="og:title" content="CNBlog | Tüm Makaleler"></meta>
        <meta
          property="og:description"
          content="CNBlog makaleler kısmını inceleyerek, yazılım üzerine yazılmış bazı kişisel makaleleri okuyup, bilgiler edinebilirsiniz."
        ></meta>

        {/* Twitter */}
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content="CNBlog | Tüm Makaleler"></meta>
        <meta
          property="twitter:description"
          content="CNBlog makaleler kısmını inceleyerek, yazılım üzerine yazılmış bazı kişisel makaleleri okuyup, bilgiler edinebilirsiniz."
        ></meta>

        <link rel="canonical" href="https://cnblog.vercel.app/articles"></link>
      </Head>
      <Article articles={articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await unfecth(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}

export default Articles;
