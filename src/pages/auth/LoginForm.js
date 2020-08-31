import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './LoginForm.module.css';
// temp!!!
import authOperations from './authOperations';
import { css } from '@emotion/core';
import RingLoader from 'react-spinners/RingLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isemailOnFocus: false,
    ispasswordOnFocus: false,
    isLoading: false,
  };
  // ============= temp!!! =========
  emailInputId = uuidv4();
  passwordInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    const { isemailOnFocus, ispasswordOnFocus, ...user } = this.state;
    // console.log('this.state = ', user);
    this.reset();
    // запрос на бэк
    authOperations.login(user).then(() => {
      console.log('this.state.isLoading', this.state.isLoading);
      this.setState({ isLoading: false });
    });
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  inputFocused = e => {
    const { name } = e.currentTarget;
    this.setState({ [`is${name}OnFocus`]: true });
  };
  inputBlured = e => {
    const { name } = e.currentTarget;
    this.setState({ [`is${name}OnFocus`]: false });
  };

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Трекер привычек</h2>
        <p className={styles.title_description}>Вход</p>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          {this.state.isLoading && (
            <div className="sweet-loading">
              <RingLoader
                css={override}
                size={35}
                color={'#ff6c00'}
                loading={this.state.loading}
              />
            </div>
          )}
          <label htmlFor={this.emailInputId} className={styles.nameLabel}>
            <input
              value={this.state.email}
              name="email"
              type="email"
              id={this.emailInputId}
              className={styles.input}
              placeholder={!this.state.isemailOnFocus ? 'Эл. почта' : ''}
              onChange={this.handleChange}
              onFocus={this.inputFocused}
              onBlur={this.inputBlured}
            />
            {this.state.isemailOnFocus ? <span>E-mail</span> : null}
          </label>
          <label htmlFor={this.passwordInputId} className={styles.nameLabel}>
            <input
              value={this.state.password}
              name="password"
              type="password"
              id={this.passwordInputId}
              className={styles.input}
              placeholder={!this.state.ispasswordOnFocus ? 'Пароль' : ''}
              onChange={this.handleChange}
              onFocus={this.inputFocused}
              onBlur={this.inputBlured}
            />
            {this.state.ispasswordOnFocus ? <span>Пароль</span> : null}
          </label>
          <button type="submit" className={styles.registration_btn}>
            Войти
          </button>
        </form>
        <p className={styles.form_description}>
          Еще нет аккаунта?<NavLink to="/"> Зарегистрироваться</NavLink>
        </p>
      </div>
    );
  }
}

export default LoginForm;
