import React from 'react';
import css from './DateTable.module.css';
// import Table from '../Table/Table';

const DateTable = ({ backData }) => {
  const getCalendarDay = i => {
    const now = new Date(new Date().setDate(new Date().getDate() - i));
    const weekDay = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const day = weekDay[now.getDay()];
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const data = now.getDate();
    const currentDate = `${data}.${month}`;

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
      {/* <Table />  */}
    </>
  );
};

export default DateTable;
