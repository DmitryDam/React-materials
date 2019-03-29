import React from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import s from './Dropdown.module.css';

const Dropdown = ({ closeDropdown, consol }) => (
  <div className={s.container}>
    <ul>
      {userNavItems.map(item => (
        <li key={item.name}>
          <Link to={item.path} onClick={closeDropdown}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
    <button onClick={closeDropdown} type="button">
      Logout
    </button>
  </div>
);

export default Dropdown;
