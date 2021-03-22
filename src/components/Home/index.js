import Info from "./components/info/Info";
import Projects from "./components/projects/Projects";
import HomeArticles from "./components/articles/HomeArticles";
import Skills from "./components/skills/Skills";

function Home({ lastArticles }) {
  return (
    <div className="container">
      <Info />
      <Projects />
      <Skills />
      <HomeArticles lastArticles={lastArticles} />
    </div>
  );
}

export { Home, Info, Projects, HomeArticles, Skills };
