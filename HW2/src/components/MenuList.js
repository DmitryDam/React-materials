import React from "react";
import Menu from "./Menu";

const MenuList = ({ menu }) => (
  <ul>
    {menu.map(el => (
      <li key={el.id}>
        <Menu {...el} />
      </li>
    ))}
  </ul>
);

export default MenuList;
