import { createSelector } from 'reselect';

// Products
const getProductIds = state => state.products;
// products: [
//     'efd96de1-dff8-4fe4-a60c-378c88973fc0',
//     '7aedadd4-9393-46d2-ba5c-351bc5b0f54a',
//     '35016489-d442-4e10-9505-b93d5d938395',
//     '6b2e3705-07b5-44b9-8e53-4fb16f8f2bb1',
//     'a08873e7-57c0-47ea-8571-d00826dbdf11',
//     '1716e391-2570-44de-9666-e8ff5a098e75'
//   ],

const getProductsEntities = state => state.entities.products;
// const entities = {
//     products: {
//         'efd96de1-dff8-4fe4-a60c-378c88973fc0': {
//             id: 'efd96de1-dff8-4fe4-a60c-378c88973fc0',
//             name: 'Яблоки',
//             price: 36,
//         },
//     },
// };
// console.log(entities.products);

// 15:00
// Рендер всего списка продуктов
export const getProducts = createSelector(
    [getProductIds, getProductsEntities],
    (ids, entities) => ids.map(id => entities[id]),
);
// Вернет :
// 0: {id: "efd96de1-dff8-4fe4-a60c-378c88973fc0", name: "Яблоки", price: 36}
// 1: {id: "7aedadd4-9393-46d2-ba5c-351bc5b0f54a", name: "Груши", price: 50}
// 2: {id: "35016489-d442-4e10-9505-b93d5d938395", name: "Ананас", price: 93}
// 3: {id: "6b2e3705-07b5-44b9-8e53-4fb16f8f2bb1", name: "Киви", price: 33}
// 4: {id: "a08873e7-57c0-47ea-8571-d00826dbdf11", name: "Морковь", price: 2}
// 5: {id: "1716e391-2570-44de-9666-e8ff5a098e75", name: "Бананы", price: 38}

// export const getProducts = state => {
//     const ids = getProductIds(state);
//     const entities = getProductsEntities(state);
//     //   console.log('ids', ids.map(el => Number(el)));
//     //   const idsNumber = ids.map(el => Number(el));
//     console.log('ids', ids.map(el => Number(el)));
//     console.log('ids', ids);
//     console.log('typeof ids', typeof ids);
//     console.log('entities', entities);

//     return ids.map(id => entities[id]);
// };

// Cart

const getCartProductIds = state => state.cart.ids;
const getCartProductAmounts = state => state.cart.amount;
// cart: {
//     ids: [
//       'efd96de1-dff8-4fe4-a60c-378c88973fc0',
//       '7aedadd4-9393-46d2-ba5c-351bc5b0f54a'
//     ],
//     amount: {
//       'efd96de1-dff8-4fe4-a60c-378c88973fc0': 2,
//       '7aedadd4-9393-46d2-ba5c-351bc5b0f54a': 1
//     }
//   },
// Кол-во видов товаров в корзине
export const getCartProductsAmount = createSelector(
    getCartProductIds,
    ids => ids.length,
);

export const getCartProducts = createSelector(
    [getCartProductIds, getCartProductAmounts, getProductsEntities],
    (ids, amounts, entities) =>
        ids.map(id => ({
            ...entities[id],
            amount: amounts[id],
        })),
);
// amount: amounts[id], добавил новое поле, и это будет имя пропа amount
