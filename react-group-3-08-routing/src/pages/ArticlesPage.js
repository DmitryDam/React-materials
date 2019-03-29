import React, { Component } from "react";
import * as api from "../api-mock/api";
import ArticleList from "../components/ArticleList";

export default class ArticlesPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    api.fetchAllArticles().then(articles => {
      this.setState({ articles });
      console.log(articles);
    });
  }

  render() {
    const { articles } = this.state;
    const { match } = this.props;
    // Передача match как пропа, после этого можно делать вложенную навигацию.

    return (
      <div>
        <h2>Artciles Page</h2>
        <ArticleList articles={articles} match={match} />
      </div>
    );
  }
}
