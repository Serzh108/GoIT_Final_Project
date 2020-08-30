import React from 'react';
import { createPortal } from 'react-dom';
import css from './deleteHabitModal.module.css';

const modalRoot = document.querySelector('#modal-root');

const DeleteHabitModal = ({ closeModal }) => {
  return createPortal(
    <>
      <div onClick={closeModal} className={css.wrap}>
        <div className={css.delete_box}>
          <h2 className={css.title}>Удалить привычку?</h2>
          <div className={css.button_wrap}>
            <button
              onClick={() => console.log('111', 111)}
              className={css.delete}
            >
              ДА
            </button>
            <span className={css.slash}>|</span>
            <button onClick={() => closeModal()} className={css.cancel}>
              НЕТ
            </button>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
};

export default DeleteHabitModal;
