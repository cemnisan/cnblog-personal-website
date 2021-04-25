import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useComment from "../../../hooks/useComment";
import CommentDetail from "./CommentDetail";
import styles from "./Detail.module.css";

function CommentForm() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [handleSubmit, text, setText, comment] = useComment();

  return (
    <React.Fragment>
      <CommentDetail comment={comment}/>
      <form onSubmit={handleSubmit}>
        <div className={"mt-2"}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`rounded ${styles.textArea}`}
          ></textarea>
        </div>
        {isAuthenticated ? (
          <div className={"buttons d-flex mt-3"}>
            <button onClick={handleSubmit} className={"btn btn-dark"}>
              Send
            </button>
            <div className={"user mx-2"}>
              <img
                width={40}
                className={"rounded-circle"}
                src={user.picture}
                alt={user.name}
              />
              <span className={"mx-2"}>{user.name}</span>
            </div>
            <button
              typeof={"button"}
              className={"btn btn"}
              onClick={() => logout()}
            >
              x
            </button>
          </div>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className={"btn btn-primary mt-2"}
          >
            Login
          </button>
        )}
      </form>
    </React.Fragment>
  );
}

export default CommentForm;
