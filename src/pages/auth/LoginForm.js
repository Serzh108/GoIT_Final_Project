import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
// temp!!!
import authOperations from '../../redux/auth/authOperations';
import { css } from '@emotion/core';
import RingLoader from 'react-spinners/RingLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const initialState = {
  email: '',
  password: '',
  isemailOnFocus: false,
  ispasswordOnFocus: false,
  isLoading: false,
};

function LoginForm({ history }) {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  // class RegistrationForm extends Component {
  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  //   isnameOnFocus: false,
  //   isemailOnFocus: false,
  //   ispasswordOnFocus: false,
  //   isLoading: false,
  // };
  // ============= temp!!! =========
  const emailInputId = uuidv4();
  const passwordInputId = uuidv4();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({
      isLoading: true,
    });
    const { isemailOnFocus, ispasswordOnFocus, isLoading, ...user } = state;

    // запрос на бэк
    console.log('state', state);
    console.log('user', user);
    // console.log('authOperations.registration', authOperations.registration())

    dispatch(authOperations.login(user));
    // .then(() => {
    //   console.log('this.state.isLoading', this.state.isLoading);
    //   this.setState({ isLoading: false });
    // });
    reset();
    history.replace('/home');
  };

  const reset = () => {
    setState({ email: '', password: '' });
  };

  const inputFocused = e => {
    const { name } = e.currentTarget;
    setState(prev => ({ ...prev, [`is${name}OnFocus`]: true }));
  };
  const inputBlured = e => {
    const { name } = e.currentTarget;
    setState(prev => ({ ...prev, [`is${name}OnFocus`]: false }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Трекер привычек</h2>
      <p className={styles.title_description}>
        Попробуй прокачать 3 привычки бесплатно, мы знаем ты можешь!
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        {state.isLoading && (
          <div className="sweet-loading">
            <RingLoader
              css={override}
              size={35}
              color={'#ff6c00'}
              loading={state.loading}
            />
          </div>
        )}
        <label htmlFor={emailInputId} className={styles.nameLabel}>
          <input
            value={state.email}
            name="email"
            type="email"
            id={emailInputId}
            className={styles.input}
            placeholder={!state.isemailOnFocus ? 'Эл. почта' : ''}
            onChange={handleChange}
            onFocus={inputFocused}
            onBlur={inputBlured}
          />
          {state.isemailOnFocus ? <span>E-mail</span> : null}
        </label>
        <label htmlFor={passwordInputId} className={styles.nameLabel}>
          <input
            value={state.password}
            name="password"
            type="password"
            id={passwordInputId}
            className={styles.input}
            placeholder={!state.ispasswordOnFocus ? 'Пароль' : ''}
            onChange={handleChange}
            onFocus={inputFocused}
            onBlur={inputBlured}
          />
          {state.ispasswordOnFocus ? <span>Пароль</span> : null}
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

export default LoginForm;
