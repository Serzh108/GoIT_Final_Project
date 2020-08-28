import React from 'react';
import style from './statisticsPage.module.css';
import Header from '../../components/Header/Header';
import Progress from '../../components/Progress/Progress';
import SideBarHabits from '../../components/SideBarHabits/SideBarHabits';
import MainTable from '../../components/MainTable';

function StatisticsPage() {
  return (
    <>
      <Header />

      <div className={style.sideBar}>
        <div className={style.date}>
          <SideBarHabits />
        </div>
      </div>
      {/* <Progress /> */}
      <MainTable />
    </>
  );
}

export default StatisticsPage;
