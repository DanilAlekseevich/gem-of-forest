import React from 'react';

import { Title } from '../../components/Title';
import styles from './Gallery.module.scss';
import smallOne from '../../assets/img/gallery/small.png';
import smallTwo from '../../assets/img/gallery/small1.png';
import mediumOne from '../../assets/img/gallery/medium.png';
import mediumTwo from '../../assets/img/gallery/medium1.png';
import long from '../../assets/img/gallery/long.png';

export function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className="container">
        <Title text="Галерея" />
        <div className={styles.galleryWrapper}>
          <img src={smallOne} alt="Фото" />
          <img src={smallTwo} alt="Фото" />
          <img src={mediumOne} alt="Фото" />
          <img src={mediumTwo} alt="Фото" />
          <img src={long} alt="Фото" />
        </div>
      </div>
    </section>
  );
}
