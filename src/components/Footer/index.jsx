import React from 'react';

import { ReactComponent as MainLogo } from '../../assets/img/mainLogo.svg';
import { ReactComponent as VkSvg } from '../../assets/vk.svg';
import { ReactComponent as InstSvg } from '../../assets/inst.svg';

import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <MainLogo />
        <div className={styles.footerSocial}>
          <a href="#">
            <VkSvg />
          </a>
          <a href="#">
            <InstSvg />
          </a>
        </div>
        <div className={styles.footerInfo}>
          <a href="tel:+79176059706">+7 (917) 605-97-06</a>
          <address>
            Солнечный переулок, 1а с. Красный Яр, Чердаклинский район, Ульяновская область
          </address>
        </div>
      </div>
    </footer>
  );
}
