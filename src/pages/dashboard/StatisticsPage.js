import React from 'react';
import style from './statisticsPage.module.css';
import Header from '../../components/Header/Header';
import Progress from '../../components/Progress/Progress';
import SideBarHabits from '../../components/SideBarHabits/SideBarHabits';
import MainTable from '../../components/MainTable/MainTable';
// import Table from '../../components/Table/Table';
import TableNew from '../../components/Table/TableNew';
import DataServer from '../../components/DataServer';
import SideBarItem from '../../components/SideBarItem/SideBarItem';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import css from '../../components/Table/Table.module.css';
import DateTable from '../../components/DateTable/DateTable';
import FormInputAddHabit from '../../components/FormInputAddHabit/FormInputAddHabit';

function StatisticsPage() {
  const handleLogOut = e => {
    console.log('LogOut');
  };

  console.log('DataServer', DataServer.userName);

  return (
    <>
      <main className={style.mainContainer}>
        <Header
          name={DataServer.userName}
          total={DataServer.total}
          handleLogOut={handleLogOut}
        />
        <div className={style.sideBar}>
          <div className={style.date}>
            <table>
              <tr>
                <SideBarItem name="Привычки" />
                <DateTable backData={DataServer.habits[0].data} />
              </tr>
              {DataServer.habits.map(item => (
                <tr key={item.habitId}>
                  <SideBarItem name={item.name} />
                  <TableNew backData={item.data} habitId={item.habitId} />
                  <td className={css.progressWrap}>
                    {item.efficiency <= 79 ? (
                      <div style={{ paddingTop: '10px', width: '50px' }}>
                        <CircularProgressbar
                          styles={buildStyles({
                            pathColor: '#FF4C61',
                            textColor: 'black',
                            textSize: '30px',
                            trailColor: '#F8F8FB',
                          })}
                          value={item.efficiency}
                          text={`${item.efficiency}`}
                        />
                      </div>
                    ) : (
                      <div style={{ paddingTop: '10px', width: '50px' }}>
                        <CircularProgressbar
                          styles={buildStyles({
                            pathColor: '#33D69F',
                            textColor: 'black',
                            textSize: '30px',
                            trailColor: '#F8F8FB',
                          })}
                          value={item.efficiency}
                          text={`${item.efficiency}`}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </table>
            {/* <SideBarHabits /> */}
            {/* <MainTable /> */}
            {/* <Table /> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default StatisticsPage;
