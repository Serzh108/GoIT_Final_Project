import React from 'react';
import css from './SideBarHabits.module.css';
import AddIcon from '@material-ui/icons/Add';

const SideBarHabits = () => {
  return (
    <>
      <table>
        <thead></thead>
        <tbody className={css.side}>
          <tr>
            <td className={css.habits}>
              <button className={css.btn}>
                <AddIcon color="white"></AddIcon>
              </button>
              Привычки
            </td>
          </tr>
          <tr>
            <td className={css.name}>Workout</td>
          </tr>
          <tr>
            <td className={css.name}>Медитация</td>
          </tr>
          <tr>
            <td className={css.name}>20 стр. книги</td>
          </tr>
          <tr>
            <td className={css.name}>Бросить курить</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SideBarHabits;
