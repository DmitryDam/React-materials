import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

function ids(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return state.includes(payload.id) ? state : [...state, payload.id];
        // 17:00
        // Если в корзине есть такой ИД, возвращаем прошлый стейт,
        // если нет такого ИД, добавляем его

        case actionTypes.REMOVE_FROM_CART:
            return state.filter(id => id !== payload.id);

        default:
            return state;
    }
}
// amount: {
//     '7aedadd4-9393': 2,
//     '35016489-d442': 1
//   }
// 20:00
function amount(state = {}, { type, payload }) {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
            };
        // Ниже более длинная запись
        // (completed properties) - Вычисляемое свойство объекта
        // return state[payload.id]
        //     ? { ...state, [payload.id]: state[payload.id] + 1 }
        //     : { ...state, [payload.id]: 1 };

        case actionTypes.REMOVE_FROM_CART: {
            const { [payload.id]: _, ...newState } = state;
            // 47:00
            // Деструктуризирует стейт, вытягивает ненужное свойство объекта в отдельную переменную,
            // и дальше делает копию оставшегося состояния и возвращает ее

            return newState;
        }

        default:
            return state;
    }
}

export default combineReducers({
    ids,
    amount,
});
