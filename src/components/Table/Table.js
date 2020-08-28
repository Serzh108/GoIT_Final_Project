import React, { useState } from 'react';
import css from './Table.module.css';
import { v4 as uuidv4 } from 'uuid';

import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Progress from '../Progress/Progress';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage = 20;

const Table = ({ backData }) => {
  const [doneHabit, setDoneHabit] = useState(null);

  const clickHabit = e => {
    console.log(e.currentTarget.id);
  };

  const play = item => {
    switch (item) {
      case null:
        return (
          <td
            onClick={clickHabit}
            className={css.box}
            id={uuidv4()}
            key={uuidv4()}
          ></td>
        );
      case false:
        return (
          <td
            onClick={clickHabit}
            className={css.box}
            style={{ backgroundColor: '#ff4c610d' }}
            id={uuidv4()}
            key={uuidv4()}
          >
            <ClearIcon style={{ color: '#FF4C61' }}></ClearIcon>
          </td>
        );
      case true:
        return (
          <td
            onClick={clickHabit}
            className={css.box}
            id={uuidv4()}
            key={uuidv4()}
          >
            <DoneIcon style={{ color: '#33D69F' }}></DoneIcon>
          </td>
        );

      default:
        return (
          <td
            onClick={clickHabit}
            className={css.box}
            id={uuidv4()}
            key={uuidv4()}
          ></td>
        );
    }
  };

  return (
    <>
      <table className={css.checkTable}>
        <thead></thead>
        <tbody>
          <tr>
            {backData.map(item => play(item))}
            <td className={css.progressWrap}>
              <div>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
                {/* <Progress/> */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
