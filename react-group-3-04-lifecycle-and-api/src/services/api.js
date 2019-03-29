import axios from "axios";

const API_URL = "https://hn.algolia.com/api/v1/search?query=";
// articlesMapper -преобразует то что пришло с бека в то что будет получать целевой компонент
// id,link,title - присваивает этим пропам значения с бекенда
// Помогает, если на бекенде поменяют названия данных
const articlesMapper = articles => {
  return articles.map(({ objectID, url, title }) => ({
    id: objectID,
    link: url,
    title
  }));
};
// 2 return потому что {} - скобки
export const getArticlesByQuery = (query = "") => {
  return axios.get(API_URL + query).then(response => {
    console.log("Ответ сервера", response);
    return articlesMapper(response.data.hits);
  });
};
