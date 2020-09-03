import React from 'react';
import { useDispatch } from 'react-redux';
import css from './Table.module.css';
import { v4 as uuidv4 } from 'uuid';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import 'react-circular-progressbar/dist/styles.css';
import habitsOperations from '../../redux/habits/habitsOperations';


const TableNew = ({ backData, habitId, startedHabit }) => {
  const dispatch = useDispatch();
  // const [doneHabit, setDoneHabit] = useState(null);

  const clickHabit = e => {
    const fullId = e.currentTarget.id.split('_');
    const newData = [...backData];
    newData[fullId[1]] = !newData[fullId[1]];
    console.log('newData', newData);

    dispatch(habitsOperations.updateHabitData(fullId[0], newData));
  };

  const notClick = () => {};

  const countLag = () => {
    //data createdAt
    const dateStart = new Date(startedHabit);
    const day = dateStart.getDate();
    const month = dateStart.getMonth() + 1;
    const year = dateStart.getFullYear();

    //data Now
    var now = new Date();
    const day2 = now.getDate();
    const month2 = now.getMonth() + 1;
    const year2 = now.getFullYear();

    // how days
    const date1 = new Date(`'${month}-${day}-${year}'`);
    const date2 = new Date(`'${month2}-${day2}-${year2}'`);
    const daysLag = Math.ceil(
      Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24),
    );

    return daysLag;
  };

  const play = (item, idx) => {
    switch (item) {
      case null:
        return (
          <td
            onClick={idx <= countLag() ? clickHabit : notClick}
            className={idx <= countLag() ? css.box : css.boxDisabled}
            id={habitId + '_' + idx}
            key={uuidv4()}
          ></td>
        );
      case false:
        return (
          <td
            onClick={idx <= countLag() ? clickHabit : notClick}
            className={idx <= countLag() ? css.box : css.boxDisabled}
            style={{ backgroundColor: '#ff4c610d' }}
            id={habitId + '_' + idx}
            key={uuidv4()}
          >
            <ClearIcon style={{ color: '#FF4C61' }}></ClearIcon>
          </td>
        );
      case true:
        return (
          <td
            onClick={idx <= countLag() ? clickHabit : notClick}
            className={idx <= countLag() ? css.box : css.boxDisabled}
            style={{ background: '#50d2a00d' }}
            id={habitId + '_' + idx}
            key={uuidv4()}
          >
            <DoneIcon style={{ color: '#33D69F' }}></DoneIcon>
          </td>
        );

      default:
        return (
          <td
            onClick={idx <= countLag() ? clickHabit : notClick}
            className={idx <= countLag() ? css.box : css.boxDisabled}
            id={habitId + '_' + idx}
            key={uuidv4()}
          ></td>
        );
    }
  };

  return (
    <>
      {/* <table className={css.checkTable}>
        <thead></thead>
        <tbody>
          <tr className={css.checkWrap}> */}
      {backData.map((item, idx) => play(item, idx))}
      {/* <td className={css.progressWrap}>
              {percentage <= 79 ? (
                <div style={{ paddingTop: '10px', width: '50px' }}>
                  <CircularProgressbar
                    styles={buildStyles({
                      pathColor: 'red',
                      textColor: 'black',
                      textSize: '30px',
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
              ) : (
                <div style={{ paddingTop: '10px', width: '50px' }}>
                  <CircularProgressbar
                    styles={buildStyles({
                      pathColor: 'green',
                      textColor: 'black',
                      textSize: '30px',
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
              )}
            </td> */}
      {/* </tr>
        </tbody>
      </table> */}
    </>
  );
};

export default TableNew;
