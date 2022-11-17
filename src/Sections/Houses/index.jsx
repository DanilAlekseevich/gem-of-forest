import React from 'react';
import Slider from 'react-slick';

import { Title } from '../../components/Title';
import { HouseCard } from '../../components/HouseCard';
import styles from './Houses.module.scss';

export function Houses() {
  const houses = [
    {
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
  ];

  return (
    <section className={styles.houses} id="houses">
      <div className="container">
        <Title text="Дома" />
        <div className={styles.housesItems}>
          {/* <Slider> */}
          {houses.map((house) => (
            <HouseCard {...house} />
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </section>
  );
}
