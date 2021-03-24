import Layout from "../layout/layout";
import { Home } from "../components/Home";
import unfetch from "isomorphic-fetch";

function Index({ lastArticles }) {
  return (
    <Layout>
      <Home lastArticles={lastArticles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await unfetch(`https://protected-badlands-53743.herokuapp.com/posts`);
  const lastArticles = await res.json();
  return {
    props: {
      lastArticles,
    },
  };
}

export default Index;
