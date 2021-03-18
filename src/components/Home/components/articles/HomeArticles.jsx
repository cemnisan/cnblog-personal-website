import React from 'react';
import Link from "next/link";
import slugify from 'slugify';
import styles from './Articles.module.css';
import {dummyArticle} from '../../../../data/dummyArticle';

function HomeArticle() {
    const itemArticle = dummyArticle && dummyArticle.map((item, index) => (
        <React.Fragment key={index}>
            <div className="articleTitle d-flex">
                <h4 className="px-2">{item.title}</h4>
                <p className={`${styles.articleDate}`} id="articleDate">{item.date}</p>
            </div>
            <div className="articleContent px-2 mb-4">
                <p id="articleContent ">{item.content}</p>

            </div>

            <div className="articleButton d-flex justify-content-end">
                <Link href={`/articles/${item.id}/${slugify(item.title, { lower: true })}`}><h6 className="btn btn-dark">Detail</h6></Link>
            </div>
            <hr/>
        </React.Fragment>
    ))

    return (
        <div className="container mt-5 py-5">
            <div className="article px-2 d-flex justify-content-between">
                <h5>My Last 3 Articles</h5>
                <a className={`${styles.articleMore}`} href="https://github.com/cemnisan" target="_blank" rel="noreferrer"><h6>More</h6></a>
            </div>
            <div className="articles mt-4">
                {itemArticle}
            </div>
        </div>
    )
}

export default HomeArticle;