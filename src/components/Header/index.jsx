import React, { useState } from 'react';

import { ReactComponent as MainLogo } from '../../assets/img/mainLogo.svg';
import { ReactComponent as MenuIcon } from '../../assets/testmenu.svg';
import { ReactComponent as CloseIcon } from '../../assets/testclose.svg';

import styles from './Header.module.scss';

export function Header() {
  const [opened, setOpened] = useState(true);

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
            <li>
              <a className={styles.headerPhone} href="tel:+79176059706">
                +7 (917) 605-97-06
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.headerMenu} onClick={onClickHamburger}>
          {opened ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </header>
  );
}
