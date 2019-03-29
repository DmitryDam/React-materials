import React from "react";
import { Link, withRouter } from "react-router-dom";

const ArticleList = ({ articles, match, location }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>
        <Link
          to={{
            pathname: `${match.url}/${article.id}`,
            state: { from: location }
            // state: { from: location } - для перехода на страницу назад
            // Передается весь объект location 38:00
          }}
        >
          {article.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ArticleList);
// Это НОС, прокинул match, location, history
