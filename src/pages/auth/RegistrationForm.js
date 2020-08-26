import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const initialFocus = {
  name: false,
  email: false,
  password: false,
};

function RegistrationForm() {
  const [state, setState] = useState(initialState);
  const changeHandler = e => {
    const { name, value } = e.currentTarget;
    setState({ [name]: value });

    console.log('name = ', state.name);
    console.log('email = ', state.email);
    console.log('password = ', state.password);
  };

  const submitHandler = evt => {
    evt.preventDefault();
    const { name, email, password } = state;
    console.log('focused.name = ', focused.name);
    console.log('name = ', name);
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
      <p className={styles.title_description}>
        Попробуй прокачать 3 привычки бесплатно, мы знаем ты можешь!
      </p>
      <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor={'registrationName'} className={styles.nameLabel}>
          <input
            value={state.name}
            name="name"
            type="text"
            id={'registrationName'}
            className={styles.input}
            placeholder={!focused.name ? 'Имя' : ''}
            onChange={changeHandler}
            onFocus={inputFocused}
            onBlur={inputBlured}
          />
          {focused.name ? <span>Имя</span> : null}
        </label>
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
          Зарегистрироваться
        </button>
      </form>
      <p className={styles.form_description}>
        Уже есть аккаунт? <a href="#">Войти</a>
      </p>
    </div>
  );
}

export default RegistrationForm;
