import React from 'react';

import styles from './ReviewCard.module.scss';

export function ReviewCard({ img, name, review }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewCardProfile}>
        <img src={img} alt="Пользователь" />
        <b>{name}</b>
      </div>
      <p>{review}</p>
    </div>
  );
}
