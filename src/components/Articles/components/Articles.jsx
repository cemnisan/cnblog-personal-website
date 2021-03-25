import React from "react";
import moment from "moment";
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
              <div className={`${styles.articleTitle} mb-3`}>
                <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h2 className="mt-1">{item.title}</h2>
                </Link>
              </div>
              <div className={`d-flex ${styles.articlesDate} mt-2 mb-2`}>
                <img
                  className="rounded-circle"
                  height={28}
                  width={28}
                  src={cemnisan}
                  alt="Cem Nisan"
                />
                <p className={styles.author}>Cem</p>
                <p className={styles.date}>{moment(item.date).format("LL")}</p>
              </div>
              <div className={styles.articlesImg} key={index}>
                {item.image ? <img src={item.image.url} alt={item.image.caption} /> : <></>}
              </div>
              <div className={styles.articlesContent}>
                <p className="mt-2">{item.content}</p>
              </div>
              <div className="readMore d-flex justify-content-start mb-4">
                <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h6 className={`mt-2 ${styles.detail}`}>
                    Read More<span className="px-2">·</span>
                    {`${readingTime(item.content)}`}
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
