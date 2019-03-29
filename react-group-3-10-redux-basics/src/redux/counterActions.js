import types from "./actionTypes";

const increment = value => ({
  type: types.INCREMENT,
  payload: value
});

const decrement = value => ({
  type: types.DECREMENT,
  payload: value
});

const reset = () => ({
  type: types.RESET
});

const changeStep = step => ({
  type: types.CHANGE_STEP,
  payload: step
});

export { increment, decrement, reset, changeStep };
// Actions
// Действия (actions) - это события, они доставляют данные из приложения в хранилище.
// Обычные JS-объекты.
// Несут в себе информацию для хранилища (store).
// Должны иметь свойство type, которое указывает тип выполняемого действия.
// Помимо поля type, структура действия может быть произвольной.
// Содержат минимально необходимый набор информации.
// Типы определяются как строковые константы.
