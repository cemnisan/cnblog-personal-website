import Head from "next/head";
import dynamic from 'next/dynamic';
import unfecth from "isomorphic-fetch";
import Layout from "../layout/layout";

const AllArticle = dynamic(() => import("../components/Articles/components/AllArticle"));

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
      <AllArticle articles={articles} />
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
