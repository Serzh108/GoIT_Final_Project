import React from 'react';
import DateTable from '../DateTable/DateTable';
import Table from '../Table/Table';
import style from './mainTable.module.css';

const MainTable = () => {
  const backData = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    null,
    true,
    true,
  ];

  const done = backData.filter(item => item === true).length;
  console.log('done', done);
  // const missed = backData.filter(item => item === false).length
  // console.log('missed', missed)
  // const checked = done + missed
  // console.log('checked', checked)
  const total = backData.length;
  console.log('total', total);

  const percentage = Math.floor((done / total) * 100);
  console.log('percentage', percentage);

  return (
    <>
      <div className={style.dateTableWrapper}>
        <DateTable backData={backData} />
        <Table percentage={percentage} backData={backData} />
      </div>
    </>
  );
};

export default MainTable;
