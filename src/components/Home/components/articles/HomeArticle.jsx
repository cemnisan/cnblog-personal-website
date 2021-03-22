import React from "react";
import Link from 'next/link'
import slugify from "slugify";
import styles from "./Articles.module.css";

function HomeArticle({ lastArticles }) {
  return (
    <React.Fragment>
      {lastArticles &&
        lastArticles.map((item, index) => (
          <React.Fragment key={index}>
            <div className={`${styles.articleTitle} d-flex`}>
            <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h4 className="mt-3">{item.title}</h4>
                </Link>
              <p className={`${styles.articleDate} px-3 my-3`} id="articleDate">
                {item.date}
              </p>
            </div>
            <div className="articleButton d-flex justify-content-end">
              <a
                className={`${styles.articleMore}`}
                href={`/articles/${slugify(item.title, { lower: true })}-${
                  item.id
                }`}
              >
                <h6>Read More...</h6>
              </a>
            </div>
            <hr />
          </React.Fragment>
        ))}
    </React.Fragment>
  );
}

export default HomeArticle;
