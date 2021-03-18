import Info from './components/info/Info';
import Projects from "./components/projects/Projects";
import HomeArticle from "./components/articles/HomeArticles";
import Skills from "./components/skills/Skills";

function Main(){
    return(
        <>
            <Info/>
            <Projects/>
            <Skills/>
            <HomeArticle/>
        </>
    )
}

export default Main;