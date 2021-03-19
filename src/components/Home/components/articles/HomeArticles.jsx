import React from 'react';
import HomeArticle from './HomeArticle';
import styles from './Articles.module.css';

function HomeArticles({lastArticles}) {
    
    return (
        <div className="container mt-5 py-5">
            <div className="article px-2 d-flex justify-content-between">
                <h5>My Last 3 Articles</h5>
                <a className={`${styles.articleMore}`} href="https://github.com/cemnisan" target="_blank" rel="noreferrer"><h6>More</h6></a>
            </div>
            <div className="articles mt-4">
                <HomeArticle lastArticles={lastArticles}/>
            </div>
        </div>
    )
}

export default HomeArticles;