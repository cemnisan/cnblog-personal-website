import ReactMarkdown from "react-markdown";
import moment from 'moment';
import { readingTime } from "../../utilities/readingTimeCal";
import styles from "./Detail.module.css";
import cemnisan from "../../assets/cemnisan.jpg";

const API_URL = 'https://stormy-reef-38695.herokuapp.com';

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
              {moment(article.date).format('LL')}
              <span className="px-2">·</span>
              {`${readingTime(article.content)}`}
            </p>
          </div>
        </div>
        {article.image.length > 0 ? (
          <div className="mt-2 article-img text-center">
            {article.image.map((item, index) => {
              return (
                <img
                  key={index}
                  src={API_URL + item.url}
                  className={`img-fluid  ${styles.articleImg}`}
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
                  : `${API_URL}${uri}`
              }
            ></ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
