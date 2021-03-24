import React from "react";
import Layout from "../../layout/layout";
import Detail from '../../components/Detail/ArticleDetail';
import slugify from "slugify";
import unfecth from 'isomorphic-fetch';

function ArticleDetail({ article }) {
  return(
    <Layout>
      <Detail article={article} />
    </Layout>
  )
}


export async function getStaticPaths() {
  const data = await unfecth(`https://stormy-reef-38695.herokuapp.com/posts`)
  const article = await data.json()
  return {
    paths: article.map((item) => {
      return {
        params: { slug: `${slugify(item.title, { lower: true })}-${item.id}` }
      }
    }),
    fallback: false // url gelmediğinde 404'e yönlendirmek için
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0]
  const data = await unfecth(`https://stormy-reef-38695.herokuapp.com/posts/`+ id)
  const article = await data.json()
  return {
    props: {
      article
    }
  }
}

export default ArticleDetail;
