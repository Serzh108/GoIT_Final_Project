import React from 'react';
import DateTable from './DateTable/DateTable';
import Table from './Table/Table';

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
      <DateTable backData={backData} />
      {/* <Table backData={backData} /> */}
    </>
  );
};

export default MainTable;
