import React from 'react';

import { Title } from '../../components/Title';
import { HouseCard } from '../../components/HouseCard';
import styles from './Houses.module.scss';

export function Houses({ showModal }) {
  const houses = [
    {
      id: 1,
      title: 'Дом 1 большой',
      imgs: [
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
      ],
      capacity: '20-25',
      descr:
        'Два этажа. На первом — кухня и баня, на втором — гостиная и три спальни. Три кровати + два дивана.',
      cost: {
        weekday: '7000',
        dayof: '8000',
        hourly: '800',
      },
    },
    {
      id: 2,
      title: 'Дом 2 большой',
      imgs: [
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
      ],
      capacity: '20-25',
      descr:
        'Два этажа. На первом — кухня и баня, на втором — гостиная и три спальни. Три кровати + два дивана.',
      cost: {
        weekday: '7000',
        dayof: '8000',
        hourly: '800',
      },
    },
    {
      id: 3,
      title: 'Дом 3 большой',
      imgs: [
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
        'https://gde.ru/images/img_ru/474x354/4f/bf/4fbf5dd8be584c0a2124b9534ac923ce.jpg',
      ],
      capacity: '20-25',
      descr:
        'Два этажа. На первом — кухня и баня, на втором — гостиная и три спальни. Три кровати + два дивана.',
      cost: {
        weekday: '7000',
        dayof: '8000',
        hourly: '800',
      },
    },
  ];

  return (
    <section className={styles.houses} id="houses">
      <div className="container">
        <Title text="Дома" />
        <div className={styles.housesItems}>
          {houses.map((item) => (
            <HouseCard key={item.id} showModal={showModal} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
