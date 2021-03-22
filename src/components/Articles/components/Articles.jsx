import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import slugify from "slugify";
import {readingTime} from '../../../utilities/readingTimeCal';
import styles from "./Articles.module.css";


function Articles({ articles }) {
  return (
    <React.Fragment>
      {articles &&
        articles.map((item, index) => (
          <React.Fragment key={index}>
            <div>
              <div className={styles.articlesDate}>
                <h6>{item.date}</h6>
              </div>
              <div className={`${styles.articleTitle} mb-3`}>
                <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h1 className="mt-3">{item.title}</h1>
                </Link>
              </div>
              <div className="articleContent">
                <ReactMarkdown
                  children={item.content}
                  className={styles.articlesParagph}
                  transformImageUri={(uri) =>
                    uri.startsWith("http") ? uri : `${process.env.API_URL}${uri}`
                  }
                ></ReactMarkdown>
              </div>
              <div className="readMore d-flex justify-content-start mb-4">
                <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h6 className={`mt-4 ${styles.detail}`}>
                    Read More<span className="px-2">·</span>
                    {`${readingTime(item.content)}`} min read
                  </h6>
                </Link>
              </div>
              <hr />
            </div>
          </React.Fragment>
        ))}
    </React.Fragment>
  );
}

export default Articles;
