import { actionTypes } from '../actions';

export default function postReducer(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.FETCH_POSTS:
            return payload.ids.posts;
            // вернет массив ИДшников
            // posts: [
            //     '15318875-8220-4594-bb38-99b79ba43ac5',
            //     '691c4363-c4ea-4060-baa2-9e4d59e074ec',
            //     ]

        case actionTypes.DELETE_POST:
            return state.filter(id => id !== payload);

        default:
            return state;
    }
}
