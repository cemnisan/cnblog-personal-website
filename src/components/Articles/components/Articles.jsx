import React from "react";
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import moment from "moment";
import Link from "next/link";
import slugify from "slugify";
import { readingTime } from "../../../utilities/readingTimeCal";
import styles from "./Articles.module.css";
import ProfilePicture from "../../ProfilePicture";

function Articles({ articles }) {
  return (
    <React.Fragment>
      {articles &&
        articles.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.articlesDetail}>
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
              <div className={`d-flex mt-2 mb-2`}>
                <ProfilePicture/>
                <p className={`${styles.author} my-1`}>Cem</p>
                <p className={`${styles.date} my-1`}>{moment(item.date).format("LL")}</p>
              </div>
              <div className={styles.articlesImg} key={index}>
                {item.image ? (
                  <Image 
                  src={item.image.url} 
                  alt={item.image.caption}
                  className="img-fluid"
                  width={585}
                  height={375}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className="content mt-2">
                <ReactMarkdown
                  className={styles.articlesContent}
                  children={`${item.content}`}
                ></ReactMarkdown>
                <p>...</p>
              </div>
              <div className="readMore d-flex justify-content-start">
                <Link
                  href="/articles/[slug]"
                  as={`/articles/${slugify(item.title, { lower: true })}-${
                    item.id
                  }`}
                >
                  <h6 className={` ${styles.detail}`}>
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
