import React from 'react';
import Articles from './Articles';

function Article({articles}) {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="headerTitle">
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