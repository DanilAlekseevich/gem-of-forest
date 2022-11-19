import React from 'react';

import { Title } from '../../components/Title';
import { ActionCard } from '../../components/ActionCard';
import styles from './Actions.module.scss';

import bath from '../../assets/img/actions/bath.png';
import billiards from '../../assets/img/actions/billiards.png';
import gazebos from '../../assets/img/actions/gazebos.png';
import fishing from '../../assets/img/actions/fishing.png';

export function Actions() {
  const actions = [
    ['Баня на дровах', bath],
    ['Бильярд', billiards],
    ['Беседки', gazebos],
    ['Рыбалка на пруду', fishing],
  ];

  return (
    <section className={styles.actions}>
      <div className="container">
        <Title text="Чем заняться?" />
        <div className={styles.actionsItems}>
          {actions.map((action, i) => (
            <ActionCard key={i} title={action[0]} img={action[1]} />
          ))}
        </div>
      </div>
    </section>
  );
}
