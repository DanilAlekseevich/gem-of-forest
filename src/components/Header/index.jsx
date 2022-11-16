import React, { useState } from 'react';

import { ReactComponent as MainLogo } from '../../assets/img/mainLogo.svg';
import { ReactCompontns as MenuIcon } from '../../assets/testmenu.svg';
import { ReactCompontns as CloseIcon } from '../../assets/testclose.svg';

import styles from './Header.module.scss';

export function Header() {
  const [opened, setOpened] = useState(false);

  const onClickHamburger = () => {
    setOpened((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <MainLogo />
        <nav>
          <ul className={`${styles.headerLinks} ${opened ? styles.headerLinksActive : ''}`}>
            <li>
              <a href="#houses">Дома</a>
            </li>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#rules">Правила</a>
            </li>
            <li>
              <a href="#way">Маршрут</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
          <div
            onClick={onClickHamburger}
            className={`${styles.headerHamburger} ${opened ? styles.headerHamburgerActive : ''}`}>
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
