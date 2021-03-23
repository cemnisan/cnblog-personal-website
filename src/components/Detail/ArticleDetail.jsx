import styles from "./Detail.module.css";
import ReactMarkdown from "react-markdown";
import { readingTime } from "../../utilities/readingTimeCal";
import cemnisan from "../../assets/cemnisan.jpg";

function Detail({ article }) {
  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="title">
          <h1 className="mt-5">{article.title}</h1>
        </div>
        <div className={` ${styles.row}`}>
          <div className="d-flex  mt-3">
            <img
              className="rounded-circle"
              src={cemnisan}
              width={28}
              height={28}
            ></img>
            <p className={`px-2 ${styles.author}`}>Cem</p>
            <p className={`${styles.date}`}>
              {article.date}
              <span className="px-2">·</span>
              {`${readingTime(article.content)}`} min read
            </p>
          </div>
        </div>
        {article.image.length > 0 ? (
          <div className="mt-2 article-img text-center">
            {article.image.map((item, index) => {
              return (
                <img
                  key={index}
                  src={process.env.NEXT_PUBLIC_API_URL + item.url}
                  className={`img-fluid rounded ${styles.articleImg}`}
                  alt={`${item.name}`}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
        <div className={styles.markRow}>
          <div className="mt-3">
            <ReactMarkdown
              children={article.content}
              className={styles.articleParagph}
              transformImageUri={(uri) =>
                uri.startsWith("http")
                  ? uri
                  : `${process.env.NEXT_PUBLIC_API_URL}${uri}`
              }
            ></ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
