import React from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as CloseIcon } from '../../assets/testclose.svg';
import styles from './Modal.module.scss';

export function Modal({ open, close }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const onClose = () => {
    close();
  };

  const onSubmitForm = ({ name, tel }) => {
    console.log(`Данные: ${name} ${tel}`);
  };

  return (
    <div className={`${styles.overlay} ${open ? styles.overlayActive : ''}`}>
      <div className={styles.modal}>
        <CloseIcon onClick={onClose} />
        <h3>Оставить заявку на бронь</h3>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label>
            Как вас зовут
            <input
              {...register('name', {
                required: 'Поле пустое!',
              })}
              placeholder="Имя"
            />
            <div>{errors?.name && (errors?.name?.message || 'Ошибка')}</div>
          </label>
          <label>
            Ваш телефон
            <input
              {...register('tel', {
                required: 'Поле пустое!',
              })}
              type="tel"
              placeholder="+7"
            />
            <div>{errors?.tel && (errors?.tel?.message || 'Ошибка')}</div>
          </label>
          <label className={styles.modalAgree}>
            <input type="checkbox" />
            Даю согласие на обработку <a href="#">Персональных данных</a>
          </label>
          <button disabled={!isValid}>{isValid ? 'Забронировать' : 'Поля не заполнены'}</button>
        </form>
      </div>
    </div>
  );
}
