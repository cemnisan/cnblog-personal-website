import slugify from "slugify";
import Layout from "../../layout/layout";
import unfecth from 'isomorphic-fetch';
import React, { useState } from "react";

function ArticleDetail({ character }) {
  
  return(
    <Layout>
      
    </Layout>
  )
}


export async function getStaticPaths() {
  const data = await unfecth("http://localhost:1337/posts")
  const character = await data.json()
  return {
    paths: character.map((item) => {
      return {
        params: { slug: `${slugify(item.title, { lower: true })}-${item.id}` }
      }
    }),
    fallback: false // url gelmediğinde 404'e yönlendirmek için
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0]
  const data = await unfecth("http://localhost:1337/posts/" + id)
  const character = await data.json()
  return {
    props: {
      character
    }
  }
}

export default ArticleDetail;
