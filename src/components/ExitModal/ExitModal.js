import React from 'react';
import { createPortal } from 'react-dom';
import css from './exitModal.module.css';

const modalRoot = document.querySelector('#modal-root');

const ExitModal = ({ closeModal }) => {
  return createPortal(
    <>
      <div onClick={closeModal} className={css.wrap}>
        <div className={css.delete_box}>
          <h2 className={css.title}>Вы действительно хотите выйти?</h2>
          <div className={css.button_wrap}>
            <button className={css.cancel}>ДА. Мне пора</button>
            <span className={css.slash}>|</span>
            <button onClick={closeModal} className={css.delete}>
              НЕТ. Я случайно
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
};

export default ExitModal;
