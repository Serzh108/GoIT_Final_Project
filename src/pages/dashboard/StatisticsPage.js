import React from 'react';
import style from './statisticsPage.module.css';
import Header from '../../components/Header/Header';
import Progress from '../../components/Progress/Progress';
import SideBarHabits from '../../components/SideBarHabits/SideBarHabits';
import MainTable from '../../components/MainTable/MainTable';

function StatisticsPage() {
  const handleLogOut = e => {
    console.log('LogOut');
  };
  return (
    <>
      <main className={style.mainContainer}>
        <Header handleLogOut={handleLogOut} />
        <div className={style.sideBar}>
          <div className={style.date}>
            <SideBarHabits />
            <MainTable />
          </div>
        </div>
        <Progress />
      </main>
    </>
  );
}

export default StatisticsPage;
