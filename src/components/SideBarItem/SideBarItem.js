import React, { useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import css from '../SideBarHabits/SideBarHabits.module.css';
import DeleteHabitModal from '../DeleteHabitModal/DeleteHabitModal';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FormInputAddHabit from '../FormInputAddHabit/FormInputAddHabit';

const SideBarItem = ({ name }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [newInput, setnewInput] = useState(false);
  const [showBtns, setshowBtns] = useState(false);

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

  const showButtons = () => {
    setshowBtns(true);
  };

  const hideButtons = () => {
    setshowBtns(false);
  };

  return (
    <>
      <td
        className={css.habits}
        onMouseOver={showButtons}
        onMouseLeave={hideButtons}
      >
        {name === 'Привычки' && (
          <button onClick={addHabit} className={css.btn}>
            <AddIcon style={{ color: 'white' }}></AddIcon>
          </button>
        )}

        {name}
        {showBtns && (
          <div className={css.iconsWrap}>
            <EditIcon
              style={{ opacity: 0.3, fontSize: 20, marginRight: '4px' }}
            ></EditIcon>
            <DeleteForeverIcon
              onClick={showModal}
              style={{ opacity: 0.3, fontSize: 20 }}
            ></DeleteForeverIcon>
          </div>
        )}
      </td>
      {isModalOpen && <DeleteHabitModal closeModal={closeModal} />}
      {/* {newInput && (
            <tr className={css.habitWrap}>
              <td
              // className={css.name}
              // onMouseOver={showButtons}
              // onMouseLeave={hideButtons}
              >
                <FormInputAddHabit />
              </td>
            </tr>
          )} */}
    </>
  );
};

export default SideBarItem;
