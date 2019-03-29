import { combineReducers } from 'redux';
import types from './noteActionTypes';
import rootModule from '../rootModule';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    // Асtion который обрабатывает этот редюссер
    // ----------------------------
    // const addNote = text => ({
    //   type: types.ADD,
    //   payload: { id: shortid.generate(), text, completed: false }, поля объекта
    // });

    case types.DELETE:
      return state.filter(item => item.id !== payload);
    // Асtion который обрабатывает этот редюссер
    // ----------------------------
    // const deleteNote = id => ({
    //   type: types.DELETE,
    //   payload: id,
    // });
    case types.TOGGLE_COMPLETED:
      console.log(state);
      return state.map(item =>
        item.id === payload ? { ...item, completed: !item.completed } : item,
      );
    // { ...item, - (распылили объект по полям) completed: !item.completed - (перезаписали поле) }
    // Пример для консоли
    // let arr = [
    //   {
    //     completed: true,
    //     id: 34,
    //     completed: false,
    //   },
    // ];
    // let bar = [...arr];
    // console.log(bar);
    // ----------------------------
    // Асtion который обрабатывает этот редюссер
    // ----------------------------
    // const toggleNote = id => ({
    //   type: types.TOGGLE_COMPLETED,
    //   payload: id,
    // });
    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    // Асtion который обрабатывает этот редюссер
    // ----------------------------
    // const changeFilter = filter => ({
    //   type: types.CHANGE_FILTER,
    //   payload: filter,
    // });

    default:
      return state;
  }
}
// На выходе будет такой объект
export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
// Далее в rootModule.js передается верхний объект
// import notesReducer from './notes/notesReducer';

// export default combineReducers({
//   notes: notesReducer,
// });
// И получаем такую структуру state
// {notes: {
//   items: [],
//   filter: ''
// }}

// Редьюсеры (reducer) - это чистые функции , которые принимают предыдущее состояние приложения
// (state) и действие (action), а затем возвращают новое следующее состояние.
// Они определяют, как изменяется состояние (state) приложения в ответ на действия (actions),
// отправленные в хранилище. Помните, что действия описывают только то, что произошло, а не как
// изменяется состояние приложения.
