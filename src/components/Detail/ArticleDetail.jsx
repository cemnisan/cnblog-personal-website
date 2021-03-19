import styles from "./Detail.module.css";

const API_URL = 'http://localhost:1337'

function Detail({ article }) {
  console.log(article);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 title">
          <h1 className="text-center">{article.title}</h1>
        </div>
        <div className="col-md-12 mt-4 content text-center">
          <p>
            {article.content} 
          </p>
        </div>
        <div className="col-md-12 mt-2 article-img text-center">
          {article.image.map((item,index) =>{
              console.log(item);
              return(
                <img
                src={API_URL + item.url}
                className="img-fluid rounded"
                alt={`${item.name}`}
              />
              )
          })}
        </div>
        <div className="col-md-12 content">
          <p className="mt-4 text-center">
            {article.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
