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

      {/* <RegistrationPage /> */}
      {/* <LoginPage /> */}
    </>
  );
};

export default App;
