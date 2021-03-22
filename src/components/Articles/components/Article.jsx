import React from 'react';
import styles from './Articles.module.css'
import Articles from './Articles';

function Article({articles}) {
    return (
        <React.Fragment>
            <div className={`container mt-5 ${styles.container}`}>
                <div className={styles.headerTitle}>
                    <h3 className="text-center">All Articles</h3>
                    <hr/>
                </div>
                <div className="row mt-5 py-3">
                    <Articles articles={articles}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Article;