import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import css from '../SideBarHabits/SideBarHabits.module.css';

const SideBarItem = () => {
  return (
    <>
      <td className={css.habits}>
        <button
          // onClick={addHabit}
          className={css.btn}
        >
          <AddIcon style={{ color: 'white' }}></AddIcon>
        </button>
        Привычки
      </td>
    </>
  );
};

export default SideBarItem;
