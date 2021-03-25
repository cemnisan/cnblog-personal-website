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
        <meta property="og:title" content="CNBlog | Tüm Makaleler"></meta>
        <meta
          property="og:description"
          content="CNBlog makaleler kısmını inceleyerek, yazılım üzerine yazılmış bazı kişisel makaleleri okuyup, bilgiler edinebilirsiniz."
        ></meta>
        <link rel="canonical" href="https://cnblog.com/articles"></link>
      </Head>
      <Article articles={articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await unfecth(`https://stormy-reef-38695.herokuapp.com/posts`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}

export default Articles;
