import React from "react";
import styles from "./Articles.module.css";
import Articles from "./Articles";

function AllArticle({ articles }) {
  return (
    <React.Fragment>
      <div className={`container mt-5 ${styles.container}`}>
        <div className={styles.headerTitle}>
          <h1 className="text-center">All Articles</h1>
          <hr />
        </div>
        <div className="row mt-3 py-3">
          <Articles articles={articles} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllArticle;
