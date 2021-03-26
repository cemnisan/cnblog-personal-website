import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import slugify from "slugify";
import styles from "./Articles.module.css";

function HomeArticle({ lastArticles }) {
  return (
    <React.Fragment>
      {lastArticles &&
        lastArticles.map((item, index) => (
          <React.Fragment key={index}>
            <div className="row lastArticles d-flex">
              <div className={`col-sm-6 col-md-6  col-lg-4 imageArticle`}>
                {item.image ? (
                  <img
                    className={`rounded ${styles.image}`}
                    width={246}
                    height={180}
                    src={item.image.url}
                    alt={item.image.caption}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div
                className={`col-sm-12 col-md-6 col-lg-8 px-3 mt-1 ${styles.articleTitle}`}
              >
                <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h3 className="mb-3">{item.title}</h3>
                </Link>
                <div className="d-flex">
                  <p className={`rounded-pill ${styles.articleDate}`}>
                    {item.date.slice(0, 4)}
                  </p>
                  <p className={`px-3 ${styles.articleSubject}`}>
                    <span>{item.hasthag.replace("#", "").slice(0, 4)}</span>
                  </p>
                </div>
                <ReactMarkdown
                  children={item.content}
                  className={styles.content}
                ></ReactMarkdown>
                <p>...</p>
              </div>
            </div>
            <div className={`d-flex justify-content-end ${styles.moreArticle} mt-3`}>
              <Link
                className={`${styles.articleMore}`}
                href={`/articles/${slugify(item.title, { lower: true })}-${
                  item.id
                }`}
              >
                <h6>Read More...</h6>
              </Link>
            </div>
            <hr />
          </React.Fragment>
        ))}
    </React.Fragment>
  );
}

export default HomeArticle;
