import React from 'react';

import { ReactComponent as MainLogo } from '../../assets/img/mainLogo.svg';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <MainLogo />
        <nav>
          <ul>
            <li>
              <a href="#">Дома</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Правила</a>
            </li>
            <li>
              <a href="#">Маршрут</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <div className={styles.headerHamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <a className={styles.headerPhone} href="tel:+79176059706">
          +7 (917) 605-97-06
        </a>
      </div>
    </header>
  );
}
