import React from 'react';
import RegistrationPage from './pages/auth/RegistrationPage';
import LoginPage from './pages/auth/LoginPage';
import logo from './assets/images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>GoIT Bootcamp19 Final project</p>
        {/* <RegistrationPage /> */}
        <LoginPage />
      </header>
    </div>
  );
}

export default App;
