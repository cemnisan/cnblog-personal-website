import React from "react";
import styles from "./Skills.module.css";
import { skillsData } from "../../../../data/skillsData";

function HomeSkills() {
  const itemSkills =
    skillsData &&
    skillsData.map((item, index) => (
      <React.Fragment key={index}>
        <div className={`col-md-4 ${styles.skillsCol}`}>
          <div
            className={` d-flex justify-content-center ${styles.skillsItem}`}
          >
            <img
              width={"40"}
              height={"40"}
              className="rounded-lg skills"
              src={item.svg}
              alt="..."
            />
            <h5 className="px-2 my-3">{item.language}</h5>
          </div>
        </div>
      </React.Fragment>
    ));
  return (
    <>
      <div className="skillsHeader">
        <div className="container">
          <div className="col-md-12 skillsTitle">
            <h2 className="text-center">Skills</h2>
          </div>
          <div className="row">{itemSkills}</div>
        </div>
      </div>
    </>
  );
}

export default HomeSkills;
