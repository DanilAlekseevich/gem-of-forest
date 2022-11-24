import React from 'react';
import Slider from 'react-slick';

import styles from './HouseCard.module.scss';

export function HouseCard({ title, imgs, capacity, descr, cost, showModal }) {
  return (
    <div className={styles.house}>
      <Slider>
        {imgs.map((img, i) => (
          <img key={i} src={img} alt="Дом" />
        ))}
      </Slider>
      <div className={styles.houseText}>
        <h4>{title}</h4>
        <div className={styles.houseCapacity}>Вместимость: {capacity} человек</div>
        <p>{descr}</p>
        <div className={styles.housePrice}>
          Пн, Пт, Вс -<b> {cost.weekday} ₽/сутки</b>
        </div>
        <div className={styles.housePrice}>
          Сб -<b> {cost.dayof} ₽/сутки</b>
        </div>
        <div className={styles.housePrice}>
          Почасово (минимум 2 часа):
          <b> {cost.hourly} ₽/час</b>
        </div>
        <button onClick={showModal}>Забронировать</button>
      </div>
    </div>
  );
}
