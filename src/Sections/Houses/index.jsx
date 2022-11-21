import React from 'react';
import Slider from 'react-slick';

import { Title } from '../../components/Title';
import { HouseCard } from '../../components/HouseCard';
import styles from './Houses.module.scss';

export function Houses() {
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
    {
      id: 4,
      title: 'Дом 4 большой',
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
      id: 5,
      title: 'Дом 5 большой',
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
      id: 6,
      title: 'Дом 6 большой',
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

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.houses} id="houses">
      <div className="container">
        <Title text="Дома" />
        <Slider {...settings}>
          {houses.map((house) => (
            <HouseCard key={house.id} {...house} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
