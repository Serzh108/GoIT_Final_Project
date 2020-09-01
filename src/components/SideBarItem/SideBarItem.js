import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteHabitModal from '../DeleteHabitModal/DeleteHabitModal';
import css from './sideBarItem.module.css';
import habitsOperations from '../../redux/habits/habitsOperations';
import FormInputAddHabit from '../FormInputAddHabit/FormInputAddHabit';

const SideBarItem = ({ name, habitId, isEdit, setisEdit }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setisModalOpen] = useState(false);
  const [showBtns, setshowBtns] = useState(false);
  // const [isEdit, setisEdit] = useState(false);
  const [editedHabit, seteditedHabit] = useState(name);
  const [localEdit, setlocalEdit] = useState(false);

  const refOverlay = useRef();
  // console.log('overlay', refOverlay);

  // const handleClickOverlay = ({ target }) => {
  //   if (refOverlay.current !== target) return;
  // };

  const handleEsc = event => {
    if (event.keyCode === 27) {
      setisModalOpen(false);
      setisEdit(false);
      setlocalEdit(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    // refOverlay.current.addEventListener('click', handleClickOverlay);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      // refOverlay.current.removeEventListener('click', handleClickOverlay);
    };
  }, []);

  const showModal = () => {
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  const showButtons = () => {
    setshowBtns(true);
  };

  const hideButtons = () => {
    setshowBtns(false);
  };

  const handleDeleteHabit = () => {
    console.log(habitId);
    // dispatch(habitsOperations.deleteHabit(habitId))
    dispatch(habitsOperations.deleteHabit(habitId));
  };

  const editHabit = e => {
    console.log('hello', 'hello');
    setisEdit(true);
    !isEdit && setlocalEdit(true);
    // dispatch(habitsOperations.updateHabit());
  };

  const handleChange = e => {
    seteditedHabit(e.target.value);
    console.log('editedHabit', editedHabit);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('habitId', habitId);
    dispatch(habitsOperations.updateHabitName(editedHabit, habitId));
    setisEdit(false);
    setlocalEdit(false);
  };

  return (
    <>
      {!localEdit ? (
        <td
          className={css.habits}
          onMouseOver={showButtons}
          onMouseLeave={hideButtons}
        >
          {name}
          {showBtns && (
            <div className={css.iconsWrap}>
              <EditIcon
                onClick={editHabit}
                style={{ opacity: 0.3, fontSize: 20, marginRight: '4px' }}
              ></EditIcon>

              <DeleteForeverIcon
                onClick={showModal}
                style={{ opacity: 0.3, fontSize: 20 }}
              ></DeleteForeverIcon>
            </div>
          )}
        </td>
      ) : (
        <td>
          {/* <FormInputAddHabit /> */}
          <form onSubmit={handleSubmit}>
            <input
              autoFocus={true}
              onChange={handleChange}
              value={editedHabit}
              style={{ width: '100px' }}
            />
          </form>
        </td>
      )}

      {isModalOpen && (
        <DeleteHabitModal
          closeModal={closeModal}
          refOverlay={refOverlay}
          handleDeleteHabit={handleDeleteHabit}
        />
      )}
    </>
  );
};

export default SideBarItem;
