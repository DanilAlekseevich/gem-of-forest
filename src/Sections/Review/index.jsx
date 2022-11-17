import React from 'react';

import { Title } from '../../components/Title';
import { ReviewCard } from '../../components/ReviewCard';
import styles from './Review.module.scss';

export function Review() {
  const reviews = [
    {
      name: 'Василий Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      name: 'Василий Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
    {
      name: 'Василий Пупкин',
      img: 'https://kartinkin.net/uploads/posts/2022-03/1648048168_2-kartinkin-net-p-kartinki-litsa-cheloveka-2.jpg',
      review:
        'Классное, живописное место. Нам с семьёй тут очень понравилось. Волга в 5 минутах ходьбы, лес, тихо, ну сказака просто. Всем рекомендую👍',
    },
  ];

  return (
    <section className={styles.review}>
      <div className="container">
        <Title text="Отзывы" />
        <div className={styles.reviewWrapper}>
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
