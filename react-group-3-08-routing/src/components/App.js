import React from "react";
import { Route, Switch } from "react-router-dom";
import Title from "./Title";
import Nav from "./Nav";
import HomePage from "../pages/HomePage";
import ArticlesPage from "../pages/ArticlesPage";
import ArticlePage from "../pages/ArticlePage";
import AboutPage from "../pages/AboutPage";
import NotFound from "../pages/NotFoundPage";

const App = () => (
  <>
    <Title text="React Router Basics" />
    <Nav />

    <Switch>
      <Route
        exact
        path="/"
        render={props => <HomePage title="Home Page" {...props} />}
        // таким методом можно передать пропы title="Home Page"
        // {...props} - обязательно. Прокидываются подкапотные пропы по маршрутизации (history, location, match)
      />
      <Route exact path="/articles" component={ArticlesPage} />
      {/* без exact "/articles/:idrrr" не отрендериться... */}
      <Route path="/articles/:idrrr" component={ArticlePage} />
      {/* :id динамический параметр */}
      {/* <Link to={`${match.url}/${article.id}`}>{article.title}</Link>  В ArticleList */}
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);
// exact - точное совпадение пути с тем который в командной строке браузера
// path - если не указать, то всегда рендериться
// </Switch> - перебирает все Route до первого совпадения, иначе дефолтное значение {NotFound}
export default App;
