import React, { useState } from 'react';

import { ReactComponent as CloseIcon } from '../../assets/testclose.svg';
import styles from './Modal.module.scss';

export function Modal() {
  const [visible, setVisible] = useState(true);

  const onClose = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={`${styles.overlay} ${visible ? styles.overlayActive : ''}`}>
      <div className={styles.modal}>
        <CloseIcon onClick={onClose} />
        <h3>Оставить заявку на бронь</h3>
        <form>
          <label>
            Как вас зовут
            <input placeholder="Имя" />
          </label>
          <label>
            Ваш телефон
            <input type="tel" placeholder="+7" />
          </label>
          <label className={styles.modalAgree}>
            <input type="checkbox" />
            Даю согласие на обработку <a href="#">Персональных данных</a>
          </label>
          <button>Забронировать</button>
        </form>
      </div>
    </div>
  );
}
