import React, { Component } from 'react';
import MenuGrid from './MenuGrid';
import * as API from '../services/api';

export default class MenuPage extends Component {
  state = { menu: [] };

  componentDidMount() {
    // API.getAllMenuItems() - придет просто в консоль(ответ сервера) потом уже then что то
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
  }

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;
      // .then(isOk => {if (!isOk) return; проверяет, что вернул бекенд
      // .then(()=>{}) - можно так
      console.log('deleteID', id);

      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getMenuItemById(id).then(item => {
      console.log(item);
    });
  };

  handleAddMenuItem = () => {
    // Метод для добавления POST запроса
    const item = {
      name: `New name ${Date.now()}`,
      price: Math.random(),
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
    };
    // const addMenuItem = item =>axios.post(BASE_URL, item)- Отправка данных на сервер
    // .then(response => response.data) - получение ответа  (из api.js)
    // Дальше здесь вызов этой функции API.addMenuItem(item)
    // Дальше .then добавление в состояние ответа сервера и рендер 
    API.addMenuItem(item).then(newItem => {
      this.setState(state => ({
        menu: [...state.menu, newItem],
      }));
    });
  };

  render() {
    const { menu } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleAddMenuItem}>
          Добавить элемент меню
        </button>
        <MenuGrid
          items={menu}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}
