import React from 'react';
import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker';
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css';
import css from './DateTable.module.css';

const DateTable = ({ backData }) => {
  const onSelectedDay = d => {
    return Date(Date.now());
    console.log(d);
  };

  const getCalendarDay = i => {
    const now = new Date(new Date().setDate(new Date().getDate() - i));
    const weekDay = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const day = weekDay[now.getDay()];
    console.log('now.getDay()', now.getDay());
    console.log('day', day);
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const data = now.getDate();
    const currentDate = `${data}.${month}`;
    console.log('currentDate', currentDate);

    return (
      <td className={css.box}>
        <div className={css.week}>{day}</div>
        <div className={css.date}>{currentDate}</div>
      </td>
    );
  };

  return (
    <>
      <table>
        <thead></thead>
        <tbody>
          <tr>{backData.map((item, index) => getCalendarDay(index))}</tr>
        </tbody>
      </table>
    </>
  );
};

export default DateTable;
