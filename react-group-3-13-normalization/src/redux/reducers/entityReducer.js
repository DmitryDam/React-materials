export default function entityReducer(state = {}, action) {
    // Редюсер без case
    if (action.payload && action.payload.entities) {
        const newState = { ...state };

        Object.keys(action.payload.entities).forEach(entityKey => {
            newState[entityKey] = {
                ...state[entityKey],
                ...action.payload.entities[entityKey],
            };
            // 1:33 до этого работало так
            // return {
            //     ...state,
            //     ...action.payload.entities
            // }
        });

        return newState;
    }

    return state;
}
// let obj = {
//     a: 12,
//     b: 234,
// };
// console.log(obj.a);
// console.log(obj['a']);
