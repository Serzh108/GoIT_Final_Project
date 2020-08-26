import React from 'react';
import RegistrationPage from './pages/auth/RegistrationPage';
import LoginPage from './pages/auth/LoginPage';
import logo from './assets/images/logo.png';
import './App.css';
import SideBarHabits from './components/SideBarHabits';

function App() {
  return (
    // <SideBarHabits />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>GoIT Bootcamp19 Final project</p>
        <RegistrationPage />
        {/* <LoginPage /> */}
      </header>
    </div>
  );
}

export default App;
