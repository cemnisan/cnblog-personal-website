import React from "react";
import Info from "./components/info/Info";
import Projects from "./components/projects/Projects";
import HomeArticles from "./components/articles/HomeArticles";
import Skills from "./components/skills/Skills";

function Home({ lastArticles }) {
  return (
    <React.Fragment>
      <Info />
      <Projects />
      <Skills />
      <HomeArticles lastArticles={lastArticles} />
    </React.Fragment>
  );
}

export default Home;
