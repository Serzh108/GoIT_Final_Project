import React, { useState, useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteHabitModal from '../DeleteHabitModal/DeleteHabitModal';
import css from './sideBarItem.module.css';

const SideBarItem = ({ name }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [showBtns, setshowBtns] = useState(false);
  // const [isDelete, setisDelete] = useState(false);

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
    // console.log('222', 222)
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
    </>
  );
};

export default SideBarItem;
