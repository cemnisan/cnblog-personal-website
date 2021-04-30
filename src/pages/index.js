import Head from "next/head";
import dynamic from 'next/dynamic';
import unfetch from "isomorphic-fetch";
import Layout from "../layout/layout";

const Home = dynamic(() => import('../components/Home'))


function Index({ lastArticles }) {
  return (
    <Layout>
      <Head>
        <title>CNBlog | Yazılım Üzerine Makaleler</title>
        <meta
          name="description"
          content="CNBlog; Yazılım üzerine yazılan kişisel makalelerin paylaşıldığı bir websitesidir."
        ></meta>
        <meta
          property="og:title"
          content="CNBlog | Yazılım Üzerine Makaleler"
        ></meta>
        <meta
          property="og:description"
          content="CNBlog; Yazılım üzerine yazılan kişisel makalelerin paylaşıldığı bir websitesidir."
        ></meta>
        <link rel="canonical" href="https://cnblog.vercel.app"></link>
      </Head>
      <Home lastArticles={lastArticles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await unfetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const lastArticles = await res.json();
  return {
    props: {
      lastArticles,
    },
  };
}

export default Index;
