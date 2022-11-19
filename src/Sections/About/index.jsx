import React from 'react';

import { Title } from '../../components/Title';
import styles from './About.module.scss';

import aboutImg from '../../assets/img/about.png'

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div>
          <Title text="О базе отдыха" />
          <p>
            Жемчужина леса предоставляет эксклюзивный загородный отдых в сосновом бору заповедной
            зоны Красного Яра в 20 минутах от города.
          </p>
          <p>
            К вашим услугам комфортабельные дома разной вместимости, электрическая и дровяная баня,
            спортивная рыбалка, различные возможности для активного отдыха (волейбольная площадка,
            горка тюбинг, каток зимой и многое другое).
          </p>
          <p>
            В 10 минутах от базы уединенный чистый пляж на берегу Волги. Отличное место для
            различных форматов отдыха.
          </p>
        </div>
        <img src={aboutImg} alt="О нас" />
      </div>
    </section>
  );
}
