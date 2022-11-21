import React from 'react';
import Slider from 'react-slick';

import { Title } from '../../components/Title';
import { ReviewCard } from '../../components/ReviewCard';
import styles from './Review.module.scss';

export function Review() {
  const reviews = [
    {
      id: 1,
      name: 'Василий Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      id: 2,
      name: 'Василий1 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      id: 3,
      name: 'Василий2 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      id: 4,
      name: 'Василий3 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      id: 5,
      name: 'Василий4 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      id: 6,
      name: 'Василий5 Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          variableWidth: true,
          rows: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: false,
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
    <section className={styles.review}>
      <div className="container">
        <Title text="Отзывы" />
        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
