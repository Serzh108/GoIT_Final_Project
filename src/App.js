import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import RegistrationPage from './pages/auth/RegistrationPage';
import LoginPage from './pages/auth/LoginPage';
import StatisticsPage from './pages/dashboard/StatisticsPage';

const App = () => {
  const { isAuth } = useSelector(state => state.auth);
  if (!isAuth) {
    return (
      <Switch>
        <Route path="/" exact component={RegistrationPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    );
  }
  return <StatisticsPage />;
};

export default App;
