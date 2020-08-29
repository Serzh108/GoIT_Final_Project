import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import RegistrationPage from './pages/auth/RegistrationPage';
import LoginPage from './pages/auth/LoginPage';
import StatisticsPage from './pages/dashboard/StatisticsPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={RegistrationPage} />
      <Route path="/login" exact component={LoginPage} />
      {/* <StatisticsPage /> */}
    </Switch>
  );
};

export default App;
