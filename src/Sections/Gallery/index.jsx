import React from 'react';
import Slider from 'react-slick';

import { Title } from '../../components/Title';
import styles from './Gallery.module.scss';
import smallOne from '../../assets/img/gallery/small.png';
import smallTwo from '../../assets/img/gallery/small1.png';
import mediumOne from '../../assets/img/gallery/medium.png';
import mediumTwo from '../../assets/img/gallery/medium1.png';
import long from '../../assets/img/gallery/long.png';

export function Gallery() {
  const images = [smallOne, smallTwo, mediumOne, mediumTwo, long];

  const settings = {
    dots: true,
    adaptiveHeight: true,
  };

  return (
    <section className={styles.gallery}>
      <div className="container">
        <div className={styles.galleryBig}>
          <Title text="Галерея" />
          <div className={styles.galleryWrapper}>
            <img src={smallOne} id="first" alt="Фото" />
            <img src={smallTwo} id="second" alt="Фото" />
            <img src={mediumOne} id="third" alt="Фото" />
            <img src={mediumTwo} id="fourth" alt="Фото" />
            <img src={long} id="fifth" alt="Фото" />
          </div>
        </div>
        <div className={styles.gallerySlider}>
          <Slider {...settings}>
            {images.map((img) => (
              <img src={img} alt="Фото" />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
