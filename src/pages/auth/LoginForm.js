import React, { Component } from 'react';
// import shortid from 'shortid';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    isemailOnFocus: false,
    ispasswordOnFocus: false,
  };
  // ============= temp!!! =========
  emailInputId = new Date();
  passwordInputId = new Date();
  // emailInputId = shortid.generate();
  // passwordInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // запрос на бэк
    console.log('this.state = ', this.state);
    this.reset();
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
          Еще нет аккаунта?<a href="#"> Зарегистрироваться</a>
        </p>
      </div>
    );
  }
}

export default LoginForm;