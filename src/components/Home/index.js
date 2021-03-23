import Info from "./components/info/Info";
import Projects from "./components/projects/Projects";
import HomeArticles from "./components/articles/HomeArticles";
import Skills from "./components/skills/Skills";
import React from "react";

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

export { Home, Info, Projects, HomeArticles, Skills };
