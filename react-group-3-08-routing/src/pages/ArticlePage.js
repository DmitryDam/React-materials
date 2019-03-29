// {
//   "id": "f9248ced-790e-482f-bde8-f594f9e28486",
//   "imageUrl": "http://via.placeholder.com/250x150",
//   "title": "Architecto necessitatibus consequatur dicta",
//   "author": "Marshall Baumbach",
//   "body": "Numquam id molestias nesciunt velit. Rerum eligendi sed est in aut consequatur laboriosam iusto. Odio repellat velit labore ut et odio reprehenderit nihil rerum. Tempora quia corrupti consequatur dolor reprehenderit qui excepturi. Odio rerum occaecati in eos aut tempora. Sunt id sit rerum sint dolor assumenda saepe.\n \rProvident ut voluptas ut et molestiae provident ut. Et asperiores voluptas. Accusamus quia eum. Excepturi iusto quia accusamus corrupti consequatur ut et ut placeat.",
//   "category": "sports"
// }
// На 47:00 делает на 1:10 добавляет this.props.match.params.id
import React, { Component } from "react";
import * as api from "../api-mock/api";

export default class ArticlePage extends Component {
  state = {
    id: null,
    title: null,
    imageUrl: null,
    author: null,
    category: null,
    body: null
  };

  componentDidMount() {
    api
      .fetchArticleById(this.props.match.params.idrrr)
      .then(article => this.setState({ ...article }));
  }
  // Сначала получили все статьи (запрос в ArticlesPage) и там есть match.params.idrrr
  render() {
    const { title, imageUrl, author, category, body } = this.state;

    return (
      <article>
        <h2>{title}</h2>
        <img src={imageUrl} alt={title} />
        <p>
          <b>Author: {author}</b>
        </p>
        <p>
          <b>Category: {category}</b>
        </p>
        <p>{body}</p>
      </article>
    );
  }
}
