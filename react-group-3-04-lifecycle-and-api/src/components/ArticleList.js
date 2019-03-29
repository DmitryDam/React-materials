import React from "react";

const ArticleList = ({ articles }) =>
  console.log("console.log(articles) || пример из ArticleList", articles) || (
    <ul>
      {/* { id, link, title } деструктуризация, вместо (el) потом el.id el.link el.title*/}
      {articles.map(({ id, link, title }) => (
        <li key={id}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {/* rel="noopener noreferrer" - для безопасности, новое окно не будет знать откуда открыто */}
            {title}
          </a>
        </li>
      ))}
    </ul>
  );

export default ArticleList;
