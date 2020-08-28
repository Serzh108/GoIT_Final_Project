import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import SideBarHabits from './components/SideBarHabits/SideBarHabits';
import RegistrationPage from './pages/auth/RegistrationPage';
import ExitModal from './components/ExitModal/ExitModal';
import DeleteHabitModal from './components/DeleteHabitModal/DeleteHabitModal';
import Table from './components/Table/Table';
import DateTable from './components/DateTable/DateTable';
import MainTable from './components/MainTable/MainTable';
import StatisticsPage from './pages/dashboard/StatisticsPage';
const App = () => {
  return (
    <>
      <StatisticsPage />
      {/* <DeleteHabitModal/>
 <ExitModal/> */}
      {/* <MainTable /> */}
      {/* <Table/> */}
      {/* <SideBarHabits /> */}
      {/* <div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>GoIT Bootcamp19 Final project</p>
  <RegistrationPage />
  <LoginPage />
 </header>
 </div> */}
    </>
  );
};

export default App;
