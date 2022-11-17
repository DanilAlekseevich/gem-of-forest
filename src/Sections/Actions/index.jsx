import React from 'react';

import { Title } from '../../components/Title';
import { ActionCard } from '../../components/ActionCard';
import styles from './Actions.module.scss';

export function Actions() {
  const actions = [
    ['Баня на дровах', 'https://mdolina.ru//userfls/site/1920/824_malskaya-russkaya-banya.jpg'],
    ['Бильярд', 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Russian_billiards_balls.jpg'],
    [
      'Беседки',
      'https://pkgreenwood.ru/wa-data/public/shop/products/14/06/614/images/3672/dacha_x.970.jpg',
    ],
    [
      'Рыбалка на пруду',
      'https://www.peredelka.tv/upload/iblock/0fd/8fe308da6f7bb0a60cb47143ffbb8c1c.jpg',
    ],
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
