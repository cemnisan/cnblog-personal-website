import styles from "./Project.module.css";
import { useQuery } from "react-query";

function ProjectCard({ item }) {
  const { err, data } = useQuery("repoData" + item, () =>
    fetch(item).then((res) => res.json())
  );
  return (
    <>
      {err && <p className="text-muted">Cannot</p>}
      {data && (
        <>
          <div className={`col-md-6 mb-5 ${styles.projectCard}`}>
            <div className={`text-center mb-4 ${styles.projectTitle}`}>
              <a href={data.html_url} target="_blank" rel="noreferrer">
                <h4>{data.name}</h4>
              </a>
              <hr />
            </div>
            <div className={styles.projectContent}>
              <p className="">{data.description}</p>
            </div>
            <div className={`${styles.language} d-flex justify-content-center`}>
              <h6>Language - {data.language}</h6>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProjectCard;
