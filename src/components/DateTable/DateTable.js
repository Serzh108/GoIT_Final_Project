import React from 'react';
import css from './DateTable.module.css';
import SideBarItem from '../SideBarItem/SideBarItem';
import { v4 as uuidv4 } from 'uuid';

// import Table from '../Table/Table';

const DateTable = ({ backData }) => {
  const getCalendarDay = i => {
    const now = new Date(new Date().setDate(new Date().getDate() - i));
    const weekDay = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const day = weekDay[now.getDay()];
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const data = String(now.getDate()).padStart(2, '0');
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
      {/* <table className={css.dateTable}>
        <thead></thead>
        <tbody>
          <tr> */}
      {/* <SideBarItem/> */}
      {backData.map((item, index) => getCalendarDay(index))}
      <td key={uuidv4()} className={css.efficiency}>
        <div>Эффективность выполнения, %</div>
      </td>
      {/* </tr>
        </tbody>
      </table> */}
      {/* <Table />  */}
    </>
  );
};

export default DateTable;
