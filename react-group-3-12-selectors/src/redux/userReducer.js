import { combineReducers } from 'redux';
import { actionTypes } from './actions';

function items(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.FETCH_DATA:
            return payload.users;

        default:
            return state;
    }
}

function selectedId(state = null, { type, payload }) {
    switch (type) {
        case actionTypes.SELECT_USER:
            return payload;

        default:
            return state;
    }
}

export default combineReducers({
    items,
    selectedId,
});

// export const fetchData = data => ({
//     type: actionTypes.FETCH_DATA,
//     payload: data,
// });

// export const selectUser = id => ({
//     type: 'SELECT_USER',
//     payload: id,
// });
