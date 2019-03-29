import React from "react";
import Product from "./Product";
// Product - карточка на 1 единицу того, что будет рендериться списком
// const Product = ({ imgUrl, name, price, alt }) => (
//   <div className="product">
//     <img className="image" src={imgUrl} alt={alt} />
//     <h2 className="name">{name}</h2>
//     <p className="text">{price}$</p>
//     <button className="btn" type="button">
//       Add to cart
//     </button>
//   </div>
// );
// ({ products }) или (props.products ) получает из АПП ссылку на JSON файл
const ProductList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <Product
          imgUrl={product.imgUrl}
          name={product.name}
          price={product.price}
          alt=""
          // Или так короче
          // Компонент Product заполнится инфой из пропа products (список продуктов)
          // {...product}
        />
      </li>
    ))}
  </ul>
);

export default ProductList;
