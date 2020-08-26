import React, { useState, useEffect } from 'react';
import css from './SideBarHabits.module.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteHabitModal from './DeleteHabitModal/DeleteHabitModal';
import FormInputAddHabit from './FormInputAddHabit/FormInputAddHabit';

const SideBarHabits = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [newInput, setnewInput] = useState(false);

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        setisModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const showModal = () => {
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  const addHabit = () => {
    setnewInput(true);
  };

  return (
    <>
      <table>
        <thead></thead>
        <tbody className={css.side}>
          <tr>
            <td className={css.habits}>
              <button onClick={addHabit} className={css.btn}>
                <AddIcon style={{ color: 'white' }}></AddIcon>
              </button>
              Привычки
            </td>
          </tr>
          <tr className={css.habitWrap}>
            <td className={css.name}>Workout</td>
            <div onClick={showModal}>
              <DeleteForeverIcon></DeleteForeverIcon>
            </div>
            {isModalOpen && <DeleteHabitModal closeModal={closeModal} />}
          </tr>
          <tr className={css.habitWrap}>
            <td className={css.name}>Медитация</td>
            <DeleteForeverIcon></DeleteForeverIcon>
          </tr>
          <tr className={css.habitWrap}>
            <td className={css.name}>20 стр. книги</td>
            <DeleteForeverIcon></DeleteForeverIcon>
          </tr>
          <tr className={css.habitWrap}>
            <td className={css.name}>Бросить курить</td>
            <DeleteForeverIcon></DeleteForeverIcon>
          </tr>
        </tbody>
      </table>
      {newInput && <FormInputAddHabit />}
    </>
  );
};

export default SideBarHabits;
