import shortid from 'shortid';
import types from './noteActionTypes';
// shortid генерация ИД аналог V4

const addNote = text => ({
  type: types.ADD,
  payload: { id: shortid.generate(), text, completed: false },
});
// 47:00
// Можно без payload, просто 3 поля, но "это будет неудобно"
// дальше редюсер должен это обрабатывать...
// type: types.ADD,
// id: shortid.generate(), 
// text, 
// completed: false ,

const deleteNote = id => ({
  type: types.DELETE,
  payload: id,
});
// 1:03

const toggleNote = id => ({
  type: types.TOGGLE_COMPLETED,
  payload: id,
});
// 1:22:30

const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  payload: filter,
});
// 1:31:40

export default { addNote, deleteNote, toggleNote, changeFilter };
// Actions
// Действия (actions) - это события, они доставляют данные из приложения в хранилище.
// Обычные JS-объекты.
// Несут в себе информацию для хранилища (store).
// Должны иметь свойство type, которое указывает тип выполняемого действия.
// Помимо поля type, структура действия может быть произвольной.
// Содержат минимально необходимый набор информации.
// Типы определяются как строковые константы.
