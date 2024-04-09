import React from "react";

const truncateTitle = (title) => {
  // const words = title.split(' ');
  // if (words.length > 7) {
  //   return words.slice(0, 7).join(' ') + '...';
  // }
  return `${title.slice(0, 30)}...`;
};

const ArticleList = ({ articles }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {articles.map(
        (article, index) =>
          article.urlToImage && (
            <div key={index} className="col">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{truncateTitle(article.title)}</h5>
                  <p className="card-text">
                    {new Date(article.publishedAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ArticleList;
