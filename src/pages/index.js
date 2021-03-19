import Layout from "../layout/layout";
import Home from "../components/Home/Home";
import unfetch from "isomorphic-fetch";

function Index({ lastArticles }) {
  return (
    <Layout>
      <Home lastArticles={lastArticles} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await unfetch("http://localhost:1337/posts");
  const lastArticles = await res.json();
  return {
    props: {
        lastArticles,
    },
  };
}

export default Index;
