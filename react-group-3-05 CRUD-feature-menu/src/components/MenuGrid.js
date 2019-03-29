import React from 'react';
import MenuCard from './MenuCard';

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <MenuCard
          name={item.name}
          price={item.price}
          image={item.image}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
          // На 1:46:00 объясняет () => onShowMoreInfo(item.id), что есть мар и id отсуда прокинуть...
          // У MenuCard есть проп onDelete  onClick={onDelete}>
          onDeleteNext={() => onDelete(item.id)}
        />
      </li>
    ))}
  </ul>
);

export default MenuGrid;
