import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './deleteHabitModal.module.css';

const modalRoot = document.querySelector('#modal-root');

const DeleteHabitModal = ({ closeModal, handleDeleteHabit }) => {
  const refOverlay = useRef();

  useEffect(() => {
    const overlayCurrent = refOverlay.current;
    const handleClickOverlay = ({ target }) => {
      if (overlayCurrent !== target) return;
      closeModal();
    };
    overlayCurrent.addEventListener('click', handleClickOverlay);
    return () => {
      overlayCurrent.removeEventListener('click', handleClickOverlay);
    };
  }, [closeModal]);

  return createPortal(
    <>
      <div ref={refOverlay} className={css.wrap}>
        <div className={css.delete_box}>
          <h2 className={css.title}>Удалить привычку?</h2>
          <div className={css.button_wrap}>
            <button
              type="submit"
              onClick={handleDeleteHabit}
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
