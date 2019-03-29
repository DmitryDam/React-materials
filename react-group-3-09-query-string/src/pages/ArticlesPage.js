import React, { Component } from "react";
import queryString from "query-string";
import * as api from "../api-mock/api";
import CategorySelector from "../components/CategorySelector";
import ArticleList from "../components/ArticleList";
import categories from "../api-mock/categories";

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class ArticlesPage extends Component {
  state = {
    articles: []
  };
  // Текущее значение строки запроса содержится в пропе location передаваемым через контекст
  // раутера.
  // {
  //   key: 'ac3df4',
  //   pathname: '/articles',
  //   search: '?category=health&sortBy=latest',
  //   hash: '',
  //   state: {}
  //   }
  componentDidMount() {
    const category = getCategoryFromProps(this.props);
    // Возвращает категорию выбора
    // {category: "technology"}
    // Автоматическое перенаправление на category=all если не ввели категорию
    // например http://localhost:3000/articles
    // Ксли категории нет, добавили руками "category=all" и она уже есть 27:00
    if (!category) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: "category=all"
      });
    }

    this.fetchArticles(category);
  }

  componentDidUpdate(prevProps1) {
    const prevCategory = getCategoryFromProps(prevProps1);
    const nextCategory = getCategoryFromProps(this.props);

    console.log("prevCategory: ", prevCategory);
    console.log("nextCategory: ", nextCategory);

    if (prevCategory === nextCategory) return;

    this.fetchArticles(nextCategory);
    // Или так, без вспомогательной функции
    // api
    // .fetchArticlesByCategory(nextCategory)
    // .then(articles => this.setState({ articles }));
  }

  fetchArticles = category => {
    api
      .fetchArticlesByCategory(category)
      .then(articles => this.setState({ articles }));
  };
  // 13:00 метод добавляет в строку запроса параметры при выборе селектом категории
  // this.props.location.pathname  добавляет текущий путь
  // search: `category=${category}` - добавляет выбранную категорию
  //   К примеру используется select для выбора категории статей. Тогда при выборе опции необходимо
  // обновлять URL используя метод history.push() для добавления новой записи в журнал истории.
  // Берем текущее значение location.pathname и обновляем search.
  handleCategoryChange = category => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`
    });
  };

  render() {
    const { articles } = this.state;

    const currentCategory = getCategoryFromProps(this.props);

    // console.log(queryString.parse(this.props.location.search));
    // Выдаст объект {category: "technology"}

    return (
      <div>
        <h2>Artciles Page</h2>

        <CategorySelector
          options={categories}
          value={currentCategory}
          // value={currentCategory} значение категории берет из строки запроса, а не состояния
          // Если написать руками категорию в строке и нажать ентер, перейдет туда
          onChange={this.handleCategoryChange}
        />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
