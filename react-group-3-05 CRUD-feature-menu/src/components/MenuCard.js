import React from 'react';

const MenuCard = ({ name, image, price, onShowMoreInfo, onDeleteNext }) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}</p>
    <div className="actions">
      <button type="button" onClick={onShowMoreInfo}>
        Больше инфо
      </button>
      <button type="button" onClick={onDeleteNext}>
        Удалить
      </button>
    </div>
  </div>
);

export default MenuCard;
