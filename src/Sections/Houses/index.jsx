import React from 'react';

import { Title } from '../../Title';
import styles from './Houses.module.scss';

export function Houses() {
  return (
    <section className={styles.houses}>
      <div className="container">
        <Title text="Дома" />
        <div className={styles.housesItems}></div>
      </div>
    </section>
  );
}
