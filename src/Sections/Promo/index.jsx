import React from 'react';

import { Title } from '../../components/Title';
import { PromoCard } from '../../components/PromoCard';
import styles from './Promo.module.scss';

export function Promo() {
  const promos = [
    {
      id: 1,
      background:
        'https://thumbs.dreamstime.com/b/happy-birthday-cupcake-celebration-message-160558421.jpg',
      text: 'Скидка 5% на день рождения',
    },
    {
      id: 2,
      background:
        'https://thumbs.dreamstime.com/b/%D1%80%D1%83%D0%BA%D0%B8-%D0%B4%D0%B0%D1%8E%D1%82-%D0%B8-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D1%8E%D1%87%D0%B8-%D0%BE%D1%82-%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%8B-%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D1%8E%D1%82%D1%81%D1%8F-165801289.jpg',
      text: 'Скидка 5% при бронировании в день заезда',
    },
  ];

  return (
    <section className={styles.promo}>
      <div className="container">
        <Title text="Акции" />
        <div className={styles.promoWrapper}>
          {promos.map((promo) => (
            <PromoCard key={promo.id} {...promo} />
          ))}
        </div>
      </div>
    </section>
  );
}
