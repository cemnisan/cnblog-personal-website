import React from "react";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Project.module.css'
import { iconsData } from "../../../../data/iconsData";

function ProjectCard({ item }) {
  console.log(iconsData[0]);
  const { err, data } = useQuery("repoData" + item, () =>
    fetch(item).then((res) => res.json())
  );
  return (
    <>
      {err && <p className="text-muted">Cannot</p>}
      {data && (
        <React.Fragment>
          <div className="col-md-6 mb-5">
            <div className={`${styles.card} card`}>
              {console.log(data)}
              <div className="card-body">
                <h5 className="card-title mb-4 text-center">{data.name}</h5>
                <h6 className="card-subtitle mb-3 text-muted text-center">
                  Language - {data.language}
                </h6>
                <p className="card-text text-center">{data.description}</p>
                <div className="iconGit text-center">
                  <a 
                  href={data.clone_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      color={"black"}
                      className="px-2"
                      icon={[
                        `${iconsData[0].icon[0]}`,
                        `${iconsData[0].icon[1]}`,
                      ]}
                      size="3x"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
}

export default ProjectCard;
