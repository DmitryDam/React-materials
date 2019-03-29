import { actionTypes } from './actions';

export default function postsReducer(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.FETCH_DATA:
            return payload.posts;

        default:
            return state;
    }
}

// export const fetchData = data => ({
//     type: actionTypes.FETCH_DATA,
//     payload: data,
// });
