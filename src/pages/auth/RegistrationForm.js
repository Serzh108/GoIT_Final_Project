import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './RegistrationForm.module.css';

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    isnameOnFocus: false,
    isemailOnFocus: false,
    ispasswordOnFocus: false,
  };
  // ============= temp!!! =========
  nameInputId = uuidv4();
  emailInputId = uuidv4();
  passwordInputId = uuidv4();

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
    this.setState({ name: '', email: '', password: '' });
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
        <p className={styles.title_description}>
          Попробуй прокачать 3 привычки бесплатно, мы знаем ты можешь!
        </p>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label htmlFor={this.nameInputId} className={styles.nameLabel}>
            <input
              value={this.state.name}
              name="name"
              type="name"
              id={this.nameInputId}
              className={styles.input}
              placeholder={!this.state.isnameOnFocus ? 'Имя' : ''}
              onChange={this.handleChange}
              onFocus={this.inputFocused}
              onBlur={this.inputBlured}
            />
            {this.state.isnameOnFocus ? <span>Имя</span> : null}
          </label>
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
            Зарегистрироваться
          </button>
        </form>
        <p className={styles.form_description}>
          Уже есть аккаунт?<a href="#">Войти</a>
        </p>
      </div>
    );
  }
}

export default RegistrationForm;
