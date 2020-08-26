import React, { useState } from 'react';
import styles from './LoginForm.module.css';

const initialState = {
  email: '',
  password: '',
};

const initialFocus = {
  email: false,
  password: false,
};

function LoginForm() {
  const [state, setState] = useState(initialState);
  const changeHandler = e => {
    const { name, value } = e.currentTarget;
    setState({ [name]: value });

    console.log('changeHandler - email = ', state.email);
    console.log('changeHandler - password = ', state.password);
  };

  const submitHandler = evt => {
    evt.preventDefault();
    const { email, password } = state;
    console.log('email = ', email);
    console.log('password = ', password);
    setState({ initialState });
  };

  const [focused, setFocused] = useState(initialFocus);
  const inputFocused = e => {
    const { name } = e.currentTarget;
    setFocused({ [name]: true });
  };
  const inputBlured = e => {
    const { name } = e.currentTarget;
    setFocused({ [name]: false });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Трекер привычек</h2>
      <p className={styles.title_description}>Вход</p>
      <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor={'registrationEmail'} className={styles.nameLabel}>
          <input
            value={state.email}
            name="email"
            type="email"
            id={'registrationEmail'}
            className={styles.input}
            placeholder={!focused.email ? 'Эл. почта' : ''}
            onChange={changeHandler}
            onFocus={inputFocused}
            onBlur={inputBlured}
          />
          {focused.email ? <span>E-mail</span> : null}
        </label>
        <label htmlFor={'registrationPassword'} className={styles.nameLabel}>
          <input
            value={state.password}
            name="password"
            type="password"
            id={'registrationPassword'}
            className={styles.input}
            placeholder={!focused.password ? 'Пароль' : ''}
            onChange={changeHandler}
            onFocus={inputFocused}
            onBlur={inputBlured}
          />
          {focused.password ? <span>Пароль</span> : null}
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

export default LoginForm;
