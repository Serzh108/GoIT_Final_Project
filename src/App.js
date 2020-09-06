import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import RegistrationPage from './pages/auth/RegistrationPage';
import LoginPage from './pages/auth/LoginPage';
import StatisticsPage from './pages/dashboard/StatisticsPage';
import Team from './components/Team/Team';

// console.log('hello');

const App = () => {
  const { isAuth } = useSelector(state => state.auth);
  if (!isAuth) {
    return (
      <Switch>
        <Route path="/" exact component={RegistrationPage} />
        <Route path="/login" exact component={LoginPage} />

        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/home" component={StatisticsPage} />
      <Route path="/team" exact component={Team} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default App;
