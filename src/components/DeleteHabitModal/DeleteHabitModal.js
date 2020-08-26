import React from 'react';
import css from './deleteHabitModal.module.css';

const DeleteHabitModal = ({ closeModal }) => {
  return (
    <>
      <div onClick={closeModal} className={css.wrap}>
        <div className={css.delete_box}>
          <h2 className={css.title}>Удалить привычку?</h2>
          <div className={css.button_wrap}>
            <button
              onClick={() => console.log('111', 111)}
              className={css.cancel}
            >
              ДА
            </button>
            <span className={css.slash}>|</span>
            <button onClick={closeModal} className={css.delete}>
              НЕТ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteHabitModal;
