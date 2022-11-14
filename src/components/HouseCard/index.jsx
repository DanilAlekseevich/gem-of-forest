import React from 'react';

import styles from './HouseCard.module.scss';

export function HouseCard({ house }) {
  const { title, img, capacity, descr, cost } = house;

  return (
    <div className={styles.house}>
      <img src={img} alt="Дом" />
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
        <button>Забронировать</button>
      </div>
    </div>
  );
}
