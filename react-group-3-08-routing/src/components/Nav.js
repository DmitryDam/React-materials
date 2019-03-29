import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  activeLink: {
    color: "palevioletred",
    textDecoration: "none"
  }
};

const Nav = () => (
  // exact тоже такой prop как y Route, влияет на выделение (точное совпадение)
  <ul>
    <li>
      <NavLink exact to="/" activeStyle={styles.activeLink}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/articles" activeStyle={styles.activeLink}>
        Articles
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={styles.activeLink}>
        About
      </NavLink>
    </li>
  </ul>
);

// Если использовать класс, то:
// <NavLink to="/books" className="link" activeClassName="active">
// Books
// </NavLink>

export default Nav;
