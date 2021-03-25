import React from "react";
import HomeArticle from "./HomeArticle";

function HomeArticles({ lastArticles }) {
  return (
    <div className="container mt-5">
      <div className="article  d-flex justify-content-between">
        <h5>Last Articles</h5>
      </div>
      <div className="articles mt-4">
        <HomeArticle lastArticles={lastArticles} />
      </div>
    </div>
  );
}

export default HomeArticles;
