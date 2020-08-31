import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import style from './statisticsPage.module.css';
import Header from '../../components/Header/Header';
import TableNew from '../../components/Table/TableNew';
import DataServer from '../../components/DataServer';
import SideBarItem from '../../components/SideBarItem/SideBarItem';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import css from '../../components/Table/Table.module.css';
import DateTable from '../../components/DateTable/DateTable';
import FormInputAddHabit from '../../components/FormInputAddHabit/FormInputAddHabit';
import SideBarHead from '../../components/SideBarHead/SideBarHead';

function StatisticsPage() {
  const [newInput, setnewInput] = useState(false);

  const { userName } = useSelector(state => state.auth);
  console.log(userName);

  const habitsLength = DataServer.habits.length;

  const addHabit = () => {
    if (habitsLength !== 10) {
      setnewInput(true);
    } else {
      setnewInput(false);
    }
  };

  const handleLogOut = e => {
    console.log('LogOut');
  };

  // console.log('DataServer', DataServer.userName);

  return (
    <>
      <main className={style.mainContainer}>
        <Header
          name={userName}
          total={DataServer.total}
          handleLogOut={handleLogOut}
        />
        <div className={style.sideBar}>
          <div className={style.date}>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <SideBarHead
                    addHabit={addHabit}
                    habitsLength={habitsLength}
                  />
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
                {/* {habitsLength >= 10 && setnewInput(false)} */}
                {newInput && (
                  <tr className={css.habitWrap}>
                    <td>
                      <FormInputAddHabit />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default StatisticsPage;
