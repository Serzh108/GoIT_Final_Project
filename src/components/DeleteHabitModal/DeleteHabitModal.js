import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './deleteHabitModal.module.css';

const modalRoot = document.querySelector('#modal-root');

const DeleteHabitModal = ({ closeModal, handleDeleteHabit }) => {
  const refOverlay = useRef();

  const handleClickOverlay = ({ target }) => {
    if (refOverlay.current !== target) return;
    closeModal();
  };

  useEffect(() => {
    refOverlay.current.addEventListener('click', handleClickOverlay);
    return () => {
      refOverlay.current.removeEventListener('click', handleClickOverlay);
    };
  }, [handleClickOverlay]);

  return createPortal(
    <>
      <div ref={refOverlay} className={css.wrap}>
        <div className={css.delete_box}>
          <h2 className={css.title}>Удалить привычку?</h2>
          <div className={css.button_wrap}>
            <button onClick={handleDeleteHabit} className={css.delete}>
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
