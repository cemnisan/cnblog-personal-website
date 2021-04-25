import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import moment from "moment";
import CommentForm from "./CommentForm";
import { readingTime } from "../../../utilities/readingTimeCal";
import styles from "./Detail.module.css";
import cemnisan from "../../../assets/cemnisan.jpg";

function Detail({ article }) {
  const render = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          language={language}
          children={value}
        ></SyntaxHighlighter>
      );
    },
  };
  return (

    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className={` ${styles.row}`}>
          <div className="title">
            <h1 className="mt-5">{article.title}</h1>
          </div>
          <div className="d-flex  mt-3">
            <img
              className="rounded-circle"
              src={cemnisan}
              alt="Cem Nisan"
              width={28}
              height={28}
            ></img>

            <Link href="/articles">
              <p className={`px-2 ${styles.author}`}>Cem</p>
            </Link>
            <p className={`${styles.date}`}>
              {moment(article.date).format("LL")}
              <span className="px-2">·</span>
              {`${readingTime(article.content)}`}
            </p>
          </div>
        </div>
        <div className="mt-2 article-img text-center">
          {article.image ? (
            <figure>
              <img
                src={article.image.url}
                className={`img-fluid  ${styles.articleImg}`}
                alt={article.image.caption}
              />
              <figcaption className={styles.caption}>
                {article.image.caption}
              </figcaption>
            </figure>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.markRow}>
          <div className="mt-3">
            <ReactMarkdown
              renderers={render}
              children={article.content}
              className={styles.articleMarkDown}
            ></ReactMarkdown>
          </div>
        </div>
        <CommentForm/>
      </div>
    </div>
  );
}

export default Detail;
