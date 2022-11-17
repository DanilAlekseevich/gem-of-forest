import React from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { Title } from '../../components/Title';
import styles from './Way.module.scss';

export function Way() {
  return (
    <section className={styles.way} id="way">
      <div className="container">
        <Title text="Как добраться" />
        <div className={styles.wayText}>
          <h4>База отдыха находится в 20км от центра города</h4>
          <address>
            Солнечный переулок, 1а с. Красный Яр, Чердаклинский район, Ульяновская область
          </address>
        </div>
        <YMaps>
          <Map
            defaultState={{ center: [54.220996, 48.554571], zoom: 13 }}
            height="400px"
            width="100%">
            <Placemark geometry={[54.220996, 48.554571]} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
}
