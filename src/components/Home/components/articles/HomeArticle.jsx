import React from "react";
import slugify from 'slugify';
import styles from "./Articles.module.css";
import Link from 'next/link';

function HomeArticle({lastArticles}) {
  return (
    <React.Fragment>
      {
        lastArticles && lastArticles.map((item, index) => (
          <React.Fragment key={index}>
              <div className="articleTitle d-flex">
                  <h4 className="px-2">{item.title}</h4>
                  <p className={`${styles.articleDate}`} id="articleDate">{item.date}</p>
              </div>
              <div className="articleContent px-2 mb-4">
                  <p id="articleContent ">{item.content}</p>
  
              </div>
  
              <div className="articleButton d-flex justify-content-end">
                  <Link href={`/articles/${slugify(item.title, { lower: true })}-${item.id}`}><h6 className="btn btn-dark">Detail</h6></Link>
              </div>
              <hr/>
          </React.Fragment>
      ))
      }
    </React.Fragment>
  );
}

export default HomeArticle;
