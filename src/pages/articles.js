import Layout from "../layout/layout";
import unfecth from "isomorphic-fetch";
import { Article } from "../components/Articles/";

function Articles({ articles }) {
  return (
    <Layout>
      <Article articles={articles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await unfecth(`https://protected-badlands-53743.herokuapp.com/posts`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
}

export default Articles;
