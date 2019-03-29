import React, { Component } from "react";
import ArticleList from "./ArticleList";
import CategorySelector from "./CategorySelector";
import ErrorNotification from "./ErrorNotification";
import Spinner from "./Spinner";
import { getArticlesByQuery } from "../services/api";

const styles = {
  header: { textAlign: "center" }
};

const categorySelectorOptions = ["html", "css", "javascript", "react"];

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    category: categorySelectorOptions[0]
  };

  componentDidMount() {
    // Вызов метода отправки запроса на сервер
    this.fetchArticles(this.state.category);
  }
  // Вызывается, когда компонент обновляется (меняется состояние)
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState.category);
    console.log("this.state", this.state.category);
    const prevCategory = prevState.category;
    const nextCategory = this.state.category;
    // Отправляет повторный запрос на сервер, если изменилось состояние
    // prevState - то что было до обновления
    // this.state- текущее состояние
    if (prevCategory !== nextCategory) {
      this.fetchArticles(nextCategory);
    }
  }

  fetchArticles = query => {
    this.setState({ isLoading: true });
    // Метод отправки запроса на сервер - вызов из api.js
    getArticlesByQuery(query)
      .then(articles => this.setState({ articles: articles, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  handleCategoryChange = evt => {
    this.setState({
      category: evt.target.value
    });
  };

  render() {
    const { articles, isLoading, error, category } = this.state;

    return (
      <div>
        <h1 style={styles.header}>Remote data in React</h1>

        <CategorySelector
          options={categorySelectorOptions}
          category={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification />}
        {/* Рендер спиннера по условию */}
        {isLoading ? <Spinner /> : <ArticleList articles={articles} />}
      </div>
    );
  }
}
