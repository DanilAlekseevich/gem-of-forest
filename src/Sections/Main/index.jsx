import React from 'react';

import styles from './Main.module.scss';

export function Main() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1>Комфортабельный отдых в загородных домах</h1>
        <h3>База отдыха в сосновом бору заповедной зоны Красного Яра в 20 минутах от города Ульяновск</h3>
        <a href="#houses">Подобрать дом</a>
      </div>
    </main>
  );
}
