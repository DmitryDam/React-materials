import types from "./actionTypes";
// import ACTION_TYPES from "./actionTypes";

const initialState = 5;
// { type, payload } деструктуризация ACTION_TYPES, без деструктуризации было бы :
// action.type action.payload
const stepReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_STEP:
      return payload;

    default:
      return state;
  }
};

export default stepReducer;
// Редьюсеры (reducer) - это чистые функции , которые принимают предыдущее состояние приложения
// (state) и действие (action), а затем возвращают новое следующее состояние.
// Они определяют, как изменяется состояние (state) приложения в ответ на действия (actions),
// отправленные в хранилище. Помните, что действия описывают только то, что произошло, а не как
// изменяется состояние приложения.

// const changeStep = step => ({
//   type: types.CHANGE_STEP,
//   payload: step
// });
