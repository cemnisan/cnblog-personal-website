import React from "react";
import styles from "./Project.module.css";
import Project from "./Project";
import { QueryClient, QueryClientProvider } from "react-query";
import gitData from "../../../../data/gitData.json";

function HomeCard() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${styles.projectHeader} mt-5`}>
        <div className="container">
          <div className="title d-flex justify-content-between">
            <h5 className="mt-5">My Projects</h5>
            <a
              className={styles.projectMore}
              href="https://github.com/cemnisan"
              target="_blank"
              rel="noreferrer"
            >
              <h6 className="mt-5">More</h6>
            </a>
          </div>
          <div className="row mt-2 mb-5">
            {gitData &&
              gitData.gitHub.map((item) => <Project key={item} item={item} />)}
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default HomeCard;
