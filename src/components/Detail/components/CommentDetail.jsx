import React from "react";
import { DateTime } from "luxon";
import styles from "./Detail.module.css";

function CommentDetail({ comment }) {
  return (
    <React.Fragment>
      <div className={"comments mt-3"}>
          <h4>Yorumlar</h4>
          <hr className={styles.line}/>
        {comment.data &&
          comment.data
            .sort((a, b) => a.createdAt - b.createdAt)
            .map((item, index) => (
              <React.Fragment key={index}>
                <div className={"user"}>
                  <img
                    className={"rounded-circle"}
                    width={40}
                    src={item.user.picture}
                  />
                  <span className={"mx-2 my-2"}>{item.user.name}</span>
                </div>
                <div className={"comment"}>
                  <p className={"mt-2 mx-1"}>
                    {item.text}
                    <span className={`mx-2 ${styles.date}`}>
                      {DateTime.fromMillis(item.createdAt).toRelative()}
                    </span>
                  </p>
                </div>
              </React.Fragment>
            ))}
      </div>
    </React.Fragment>
  );
}

export default CommentDetail;
