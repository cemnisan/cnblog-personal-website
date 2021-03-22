import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import slugify from "slugify";
import cemnisan from "../../../assets/cemnisan.jpg";
import { readingTime } from "../../../utilities/readingTimeCal";
import styles from "./Articles.module.css";

function Articles({ articles }) {
  return (
    <React.Fragment>
      {articles &&
        articles.map((item, index) => (
          <React.Fragment key={index}>
            <div>
              <div className={`d-flex ${styles.articlesDate} mt-2`}>
                <img
                  className="rounded-circle"
                  height={28}
                  width={28}
                  src={cemnisan}
                  alt="..."
                />
                <p className={styles.author}>Cem</p>
                <p className={styles.date}>{item.date}</p>
              </div>
              <div className={`${styles.articleTitle} mb-3`}>
                <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h1 className="mt-1">{item.title}</h1>
                </Link>
              </div>
              <div className="articleContent">
                <ReactMarkdown
                  children={item.content}
                  className={styles.articlesParagph}
                  transformImageUri={(uri) =>
                    uri.startsWith("http")
                      ? uri
                      : `${process.env.NEXT_PUBLIC_API_URL}${uri}`
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
