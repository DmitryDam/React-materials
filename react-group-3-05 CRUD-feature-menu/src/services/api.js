import axios from 'axios';

const BASE_URL = 'http://localhost:3001/menu';

const getAllMenuItems = () =>
  axios.get(BASE_URL).then(response => {
    console.log(response);
    // return response.data;
  });

const getMenuItemById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteMenuItem = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);
// response.status === 200  проверка на то, вернул ли бекенд успешный статус, что значит, что на бекенде
// удалилось, а значит можно удалять на фронте. true/false

const addMenuItem = item =>
  axios.post(BASE_URL, item).then(response => response.data);

export { getAllMenuItems, getMenuItemById, deleteMenuItem, addMenuItem };

// export const getArticlesByQuery = (query = "") => {
//   return axios.get(API_URL + query).then(response => {
//     console.log("Ответ сервера", response);
//     return articlesMapper(response.data.hits);
//   });
// };
