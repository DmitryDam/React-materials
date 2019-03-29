import React from 'react';

const Products = ({ products = [], addToCart }) =>
    console.log(products) ||
    // Рендер по условию в function component
    products.length > 0 ? (
        <ul>
            {products.map(({ id, name, price }) => (
                <li key={id}>
                    <p>
                        <b>{name}</b>
                    </p>
                    <p>Цена: {price}</p>
                    {/* Ссылка на функцию */}
                    <button onClick={() => addToCart(id)}>
                        Добавить в корзину
                    </button>
                    <hr />
                </li>
            ))}
        </ul>
    ) : null;

export default Products;

// Пример без деструктуризации
// -------------------------------
// import React from 'react';

// const Products = ({ products = [], addToCart }) =>
//     // Рендер по условию в function component
//     products.length > 0 ? (
//         <ul>
//             {products.map(el => (
//                 <li key={el.id}>
//                     <p>
//                         <b>{el.name}</b>
//                     </p>
//                     <p>Цена: {el.price}</p>
//                     {/* Ссылка на функцию */}
//                     <button onClick={() => addToCart(el.id)}>
//                         Добавить в корзину
//                     </button>
//                     <hr />
//                 </li>
//             ))}
//         </ul>
//     ) : null;

// export default Products;
