import React from 'react';

import styles from './ActionCard.module.scss';

export function ActionCard({ title, img }) {
  return (
    <div className={styles.action}>
      <img src={img} alt="action" />
      {title}
    </div>
  );
}
