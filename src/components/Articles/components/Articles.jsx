import React from "react";
import Link from "next/link";
import slugify from "slugify";
import styles from "./Articles.module.css";

function Articles({ articles }) {
  return (
    <React.Fragment>
      {articles &&
        articles.map((item, index) => (
          <React.Fragment key={index}>
            <div className="col-md-12">
              <div className="articleDate">
                <h6 className={styles.articlesDate}>{item.date}</h6>
              </div>
              <div className="articleTitle text-center">
                <h2>{item.title}</h2>
              </div>
              <div className="articleContent mt-3">
                <p id="articleContent" className={styles.articlesParagph}>
                  {item.content}
                </p>
              </div>
              <div className="readMore d-flex justify-content-end">
                <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h6 className="btn btn-dark">Detail</h6>
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
    </React.Fragment>
  );
}

export default Articles;
