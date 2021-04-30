import React from "react";
import HomeArticles from "./components/articles/HomeArticles";
import dynamic from "next/dynamic";

const Info = dynamic(() => import("./components/info/Info"), { ssr: false });

const Projects = dynamic(() => import("./components/projects/Projects"), {
  ssr: false,
});

const Skills = dynamic(() => import("./components/skills/Skills"), {
  ssr: false,
});

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
