import React from 'react';

import styles from './PromoCard.module.scss';

export function PromoCard({ background, text }) {
  return (
    <div className={styles.promoCard} style={{ backgroundImage: `url(${background})` }}>
      <div>{text}</div>
    </div>
  );
}
