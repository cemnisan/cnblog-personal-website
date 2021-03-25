import React from "react";
import moment from "moment";
import slugify from "slugify";
import unfecth from "isomorphic-fetch";
import Head from "next/head";
import Layout from "../../layout/layout";
import Detail from "../../components/Detail/ArticleDetail";

function ArticleDetail({ article }) {
  //Sitemap Oluşturmayı öğren.
  return (
    <Layout>
      <Head>
        <title>CNBlog | {article.title}</title>
        <meta
          name="description"
          content={`${moment(article.date).format(
            "LL"
          )} - ${article.content.slice(0, 160)}...`}
        ></meta>
        <meta name="keywords" content={article.hasthag}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content={article.title}></meta>
        <meta
          property="og:description"
          content={`${article.content.slice(0, 160)}...`}
        ></meta>
        <meta property="og:image" content={article.image.url}></meta>
        <meta
          property="og:url"
          content={`cnblog.com/articles/${slugify(article.title, {
            lower: true,
          })}`}
        ></meta>
        <meta property="og:site_name" content="CNBlog"></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta
          name="twitter:site"
          content={`cnblog.com/articles/${slugify(article.title, {
            lower: true,
          })}`}
        ></meta>
        <meta name="twitter:creator" content="Cem Nisan"></meta>
        <meta
          property="twitter:url"
          content={`cnblog.com/articles/${slugify(article.title, {
            lower: true,
          })}`}
        ></meta>
        <meta name="twitter:title" content={article.title}></meta>
        <meta
          name="twitter:description"
          content={`${article.content.slice(0, 100)}...`}
        ></meta>
        <meta name="twitter:image" content={article.image.url}></meta>
        <link
          rel="canonical"
          href={`cnblog.com/articles/${slugify(article.title, {
            lower: true,
          })}`}
        ></link>
      </Head>
      <Detail article={article} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await unfecth(`https://stormy-reef-38695.herokuapp.com/posts`);
  const article = await data.json();
  return {
    paths: article.map((item) => {
      return {
        params: { slug: `${slugify(item.title, { lower: true })}-${item.id}` },
      };
    }),
    fallback: false, // url gelmediğinde 404'e yönlendirmek için
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0];
  const data = await unfecth(
    `https://stormy-reef-38695.herokuapp.com/posts/` + id
  );
  const article = await data.json();
  return {
    props: {
      article,
    },
  };
}

export default ArticleDetail;
