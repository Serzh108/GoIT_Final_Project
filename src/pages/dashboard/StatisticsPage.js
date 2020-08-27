import React from 'react';
import style from './statisticsPage.module.css';
import Header from '../../components/Header/Header';
import Progress from '../../components/Progress/Progress';

function StatisticsPage() {
  return (
    <>
      <Header />

      <div className={style.sideBar}>
        <div className={style.date}></div>
      </div>
      <Progress />
    </>
  );
}

export default StatisticsPage;
