import Info from "./components/info/Info";
import Projects from "./components/projects/Projects";
import HomeArticles from "./components/articles/HomeArticles";
import Skills from "./components/skills/Skills";

function Home({ lastArticles }) {
  return (
    <>
      <Info />
      <Projects />
      <Skills />
      <HomeArticles lastArticles={lastArticles}/>
    </>
  );
}

export {Home,Info,Projects,HomeArticles,Skills};
