import React from 'react';
import DateTable from '../DateTable/DateTable';
import Table from '../Table/Table';
import style from './mainTable.module.css';
const MainTable = () => {
  const backData = [
    null,
    null,
    false,
    true,
    null,
    false,
    true,
    null,
    null,
    false,
    true,
    null,
    false,
    true,
    null,
    null,
    false,
    true,
    null,
    false,
    true,
  ];

  return (
    <>
      <div className={style.dateTableWrapper}>
        <DateTable backData={backData} />
        <Table backData={backData} />
      </div>
    </>
  );
};

export default MainTable;
