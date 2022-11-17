import React from 'react';

import styles from './Main.module.scss';

export function Main({ showModal }) {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1>Загородный отдых в комфортабельных домах</h1>
        <h3>База отдыха в сосновом бору заповедной зоны Красного Яра в 20 минутах от города</h3>
        <button onClick={() => showModal()}>Подобрать дом</button>
      </div>
    </main>
  );
}
