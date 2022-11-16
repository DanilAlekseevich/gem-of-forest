import React from 'react';

import styles from './Modal.module.scss';

export function Modal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
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
