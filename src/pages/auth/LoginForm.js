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

function LoginForm() {
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
          Зарегистрироваться
        </button>
      </form>

      <p className={styles.form_description}>
        Еще нет аккаунта?<NavLink to="/"> Зарегистрироваться</NavLink>
      </p>
    </div>
  );
}

export default LoginForm;

// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import styles from './LoginForm.module.css';
// // temp!!!
// import authOperations from './authOperations';
// import { css } from '@emotion/core';
// import RingLoader from 'react-spinners/RingLoader';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// class LoginForm extends Component {
//   state = {
//     email: '',
//     password: '',
//     isemailOnFocus: false,
//     ispasswordOnFocus: false,
//     isLoading: false,
//   };
//   // ============= temp!!! =========
//   emailInputId = uuidv4();
//   passwordInputId = uuidv4();

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.setState({
//       isLoading: true,
//     });
//     const { isemailOnFocus, ispasswordOnFocus, isLoading, ...user } = this.state;
//     // console.log('this.state = ', user);
//     this.reset();
//     // запрос на бэк
//     authOperations.login(user).then(() => {
//       console.log('this.state.isLoading', this.state.isLoading);
//       this.setState({ isLoading: false });
//     });
//   };

//   reset = () => {
//     this.setState({ email: '', password: '' });
//   };

//   inputFocused = e => {
//     const { name } = e.currentTarget;
//     this.setState({ [`is${name}OnFocus`]: true });
//   };
//   inputBlured = e => {
//     const { name } = e.currentTarget;
//     this.setState({ [`is${name}OnFocus`]: false });
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}>Трекер привычек</h2>
//         <p className={styles.title_description}>Вход</p>
//         <form onSubmit={this.handleSubmit} className={styles.form}>
//           {this.state.isLoading && (
//             <div className="sweet-loading">
//               <RingLoader
//                 css={override}
//                 size={35}
//                 color={'#ff6c00'}
//                 loading={this.state.loading}
//               />
//             </div>
//           )}
//           <label htmlFor={this.emailInputId} className={styles.nameLabel}>
//             <input
//               value={this.state.email}
//               name="email"
//               type="email"
//               id={this.emailInputId}
//               className={styles.input}
//               placeholder={!this.state.isemailOnFocus ? 'Эл. почта' : ''}
//               onChange={this.handleChange}
//               onFocus={this.inputFocused}
//               onBlur={this.inputBlured}
//             />
//             {this.state.isemailOnFocus ? <span>E-mail</span> : null}
//           </label>
//           <label htmlFor={this.passwordInputId} className={styles.nameLabel}>
//             <input
//               value={this.state.password}
//               name="password"
//               type="password"
//               id={this.passwordInputId}
//               className={styles.input}
//               placeholder={!this.state.ispasswordOnFocus ? 'Пароль' : ''}
//               onChange={this.handleChange}
//               onFocus={this.inputFocused}
//               onBlur={this.inputBlured}
//             />
//             {this.state.ispasswordOnFocus ? <span>Пароль</span> : null}
//           </label>
//           <button type="submit" className={styles.registration_btn}>
//             Войти
//           </button>
//         </form>
//         <p className={styles.form_description}>
//           Еще нет аккаунта?<NavLink to="/"> Зарегистрироваться</NavLink>
//         </p>
//       </div>
//     );
//   }
// }

// export default LoginForm;
