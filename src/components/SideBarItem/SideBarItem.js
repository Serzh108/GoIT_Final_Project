import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteHabitModal from '../DeleteHabitModal/DeleteHabitModal';
import css from './sideBarItem.module.css';
import habitsOperations from '../../redux/habits/habitsOperations';

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

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        setisModalOpen(false);
        setisEdit(false);
        setlocalEdit(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    // refOverlay.current.addEventListener('click', handleClickOverlay);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      // refOverlay.current.removeEventListener('click', handleClickOverlay);
    };
  }, [setisEdit]);

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
    // console.log(habitId);
    // dispatch(habitsOperations.deleteHabit(habitId))
    dispatch(habitsOperations.deleteHabit(habitId));
  };

  const editHabit = e => {
    // console.log('hello', 'hello');
    setisEdit(true);
    !isEdit && setlocalEdit(true);
    // dispatch(habitsOperations.updateHabit());
  };

  const handleChange = e => {
    seteditedHabit(e.target.value);
    // console.log('editedHabit', editedHabit);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('habitId', habitId);
    dispatch(habitsOperations.updateHabitName(editedHabit, habitId));
    setisEdit(false);
    setlocalEdit(false);
  };

  // const setNameLength = name => {
  //   console.log('FUNCTION START');
  //   if (name.length > 15) {
  //     const nameArray = name.split(' ');
  //     let newName = [];
  //     if (nameArray.length === 1) {
  //       console.log('nameArrayBeforeMap', nameArray);
  //       console.log('name is too long!', name);
  //       newName = nameArray.map(item => {
  //         if (item.length > 15) {
  //           const firstPart = item.slice(0, 12);
  //           const secondPart = item.slice(12);
  //           item = firstPart + '- \n' + secondPart;
  //           console.log('newItem', item);
  //           return item;
  //         }
  //       });
  //     } else {
  //       newName = nameArray;
  //     }
  //     console.log('nameArrayAfterMap', nameArray);
  //     console.log('newName', newName);
  //     return newName.join(' ');
  //   }
  //   console.log('FUNCTION FINISH');
  // };

  const setNameLength = name => {
    // console.log('FUNCTION START');
    if (name.length > 15) {
      // const nameArray = name.split(' ');
      // let newName = [];
      // if (nameArray.length === 1)
      const firstPart = name.slice(0, 14);
      const secondPart = name.slice(14);
      const newName = firstPart + '- \n' + secondPart;
      // console.log('newItem', newName);
      // newName = nameArray;
      return newName;
    } else {
      return name;
    }
    // console.log('FUNCTION FINISH');
  };

  const showName = setNameLength(name);

  return (
    <>
      {!localEdit ? (
        <td
          className={css.habits}
          onMouseOver={showButtons}
          onMouseLeave={hideButtons}
        >
          {showName}
          {/* {setNameLength(name)} */}
          {/* <span className={css.name}> */}
          {/* {name} */}
          {/* </span> */}
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
        <td
          style={{ backgroundColor: 'rgba(55, 59, 83, 0.9)', width: '214px' }}
        >
          <form className={css.form} onSubmit={handleSubmit}>
            <input
              pattern="[a-zA-Z0-9а-яА-Я/' ']+"
              autoFocus={true}
              onChange={handleChange}
              value={editedHabit}
              maxLength="30"
              className={css.input}
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
