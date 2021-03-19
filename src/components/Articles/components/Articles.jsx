import React from 'react';
import slugify from 'slugify';
import {dummyArticle} from '../../../data/dummyArticle';
import styles from './Articles.module.css';

function Articles() {
    const itemArticle = dummyArticle && dummyArticle.map((item, index) => (
        <React.Fragment key={index}>
            <div className="col-md-12">
                <div className="articleDate">
                    <h6 className={styles.articlesDate}>{item.date}</h6>
                </div>
                <div className="articleTitle text-center">
                    <h2>{item.title}</h2>
                </div>
                <div className="articleContent mt-3">
                    <p id="articleContent" className={styles.articlesParagph}>{item.content}</p>
                </div>
                <div className="readMore d-flex justify-content-end">
                    <a href={`/articles/${item.id}/${slugify(item.title, { lower: true })}`}><button className="btn btn-dark">Read more</button></a>
                </div>
            </div>
        </React.Fragment>
    ))
    return (
        <React.Fragment>
            {itemArticle}
        </React.Fragment>
    )
}

export default Articles;