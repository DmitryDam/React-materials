import React from 'react';
import styles from './Navigation.module.css';

// Инлайн стилизация. Не рекомендует использовать 8:30
const Navigation = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li key={item}>
        <a className={styles.link} href="/">
          {item}
        </a>
      </li>
    ))}
  </ul>
);

export default Navigation;
