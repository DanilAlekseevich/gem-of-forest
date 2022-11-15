import React, { useState } from 'react';

import { ReactComponent as Open } from '../../assets/pnd.svg';

import styles from './Rule.module.scss';

export function Rule({ title, descr }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.rule}>
      <div className={styles.ruleHeader}>
        <h3>{title}</h3>
        <div>
          <button onClick={() => setOpened((prev) => !prev)}>
            <Open className={opened ? styles.active : ''} />
          </button>
        </div>
      </div>
      {opened && <p>{descr}</p>}
    </div>
  );
}
