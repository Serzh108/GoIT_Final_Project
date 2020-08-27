import React from 'react';
import logo from './assets/images/logo.png';
import './App.css';
import SideBarHabits from './components/SideBarHabits/SideBarHabits';
import RegistrationPage from './pages/auth/RegistrationPage';
import ExitModal from './components/ExitModal/ExitModal';
import DeleteHabitModal from './components/DeleteHabitModal/DeleteHabitModal';
import StatistictPage from './pages/dashboard/StatisticsPage';
const App = () => {
  return (
    <>
      {/* <DeleteHabitModal /> */}
      {/* <ExitModal /> */}
      <StatistictPage />
      {/* <SideBarHabits /> */}
      {/* <RegistrationPage /> */}
      {/* <LoginPage /> */}
    </>
  );
};

export default App;
