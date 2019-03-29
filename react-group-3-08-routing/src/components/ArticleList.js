import React from "react";
import { Link } from "react-router-dom";
// match был прокинут из ArticlesPage
// { Link } для вложенной навигации
const ArticleList = ({ articles, match }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>
        {/* {`${match.url}/${article.id}`} путь составляется articles/id */}
        <Link to={`${match.url}/${article.id}`}>{article.title}</Link>
        {/* url - строка, совпавшая часть URL-адреса. Используется для создания вложенной навигации. */}
        {/* При клике на ссылку УРЛ в строке браузера будет меняться */}
        {/* Далее в АПП 
        <Route path="/articles/:idrrr" component={ArticlePage} /> */}
      </li>
    ))}
  </ul>
);

export default ArticleList;
