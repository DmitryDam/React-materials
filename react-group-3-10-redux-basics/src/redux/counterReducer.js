import types from "./actionTypes";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + action.payload;

    case types.DECREMENT:
      return state - action.payload;

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};

export default counterReducer;
// Редьюсеры (reducer) - это чистые функции , которые принимают предыдущее состояние приложения
// (state) и действие (action), а затем возвращают новое следующее состояние.
// Они определяют, как изменяется состояние (state) приложения в ответ на действия (actions),
// отправленные в хранилище. Помните, что действия описывают только то, что произошло, а не как
// изменяется состояние приложения.

// const increment = value => ({
//   type: types.INCREMENT,
//   payload: value
// });

// const decrement = value => ({
//   type: types.DECREMENT,
//   payload: value
// });

// const reset = () => ({
//   type: types.RESET
// });

// const changeStep = step => ({
//   type: types.CHANGE_STEP,
//   payload: step
// });
