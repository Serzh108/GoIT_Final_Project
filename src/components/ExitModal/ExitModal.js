import React, { useState } from 'react';
import css from './exitModal.module.css';

const ExitModal = () => {
  return (
    <>
      <div className={css.wrap}>
        <div className={css.delete_box}>
          <h2 className={css.title}>Вы действительно хотите выйти?</h2>
          <div className={css.button_wrap}>
            <button className={css.cancel}>ДА. Мне пора</button>
            <span className={css.slash}>|</span>
            <button className={css.delete}>НЕТ. Я случайно</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitModal;
