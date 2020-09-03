import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
// temp!!!
import authOperations from '../../redux/auth/authOperations';
import { css } from '@emotion/core';
import RingLoader from 'react-spinners/RingLoader';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  // lastName: Yup.string()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

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

  const fonar = () => {
    console.log('222222', 222222);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('works!!!!!!!');
  //   setState({
  //     isLoading: true,
  //   });
  //   const { isemailOnFocus, ispasswordOnFocus, isLoading, ...user } = state;
  //   console.log('state', state);
  //   console.log('user', user);
  //   dispatch(authOperations.login(user));
  //   reset();
  //   history.replace('/home');
  // };

  const handleSubmit1 = values => {
    console.log('works!!!!!!!');
    console.log('values', values);
    setState({
      isLoading: true,
    });
    const { isemailOnFocus, ispasswordOnFocus, isLoading, ...user } = values;
    console.log('values', values);
    console.log('user', user);
    dispatch(authOperations.login(user));
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
      <Formik
        // onSubmit={fonar}

        onSubmit={values => handleSubmit1(values)}
        validationSchema={SignupSchema}
        initialValues={{
          email: '',
          password: '',
          isemailOnFocus: false,
          ispasswordOnFocus: false,
          isLoading: false,
        }}
      >
        {({ errors, touched }) => (
          <Form
            className={styles.form}
            // onSubmit={handleSubmit}
          >
            <label htmlFor={emailInputId} className={styles.nameLabel}>
              <Field
                className={styles.input}
                placeholder={!state.isemailOnFocus ? 'Эл. почта' : ''}
                name="email"
                type="email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </label>
            <label htmlFor={passwordInputId} className={styles.nameLabel}>
              <Field
                // onSubmit={()=>console.log(111)}
                placeholder={'Пароль: от 8 до 16 символов'}
                // placeholder={!state.ispasswordOnFocus ? 'Пароль' : 'min 8 max 16'}
                className={styles.input}
                // onChange={handleChange}
                onFocus={inputFocused}
                onBlur={inputBlured}
                name="password"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </label>
            <button
              type="submit"
              // onClick={handleSubmit}
              className={styles.registration_btn}
            >
              Войти
            </button>
          </Form>
        )}
        {/* <form onSubmit={handleSubmit} className={styles.form}>
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
        </form> */}
      </Formik>

      <p className={styles.form_description}>
        Еще нет аккаунта?<NavLink to="/"> Зарегистрироваться</NavLink>
      </p>
    </div>
  );

  //   return (
  //     <div className={styles.container}>
  //       <h2 className={styles.title}>Трекер привычек!!!!!!</h2>
  //       <p className={styles.title_description}>
  //         Попробуй прокачать 3 привычки бесплатно, мы знаем ты можешь!
  //       </p>
  //       <Formik
  //         initialValues={{
  //           email: '',
  //           password: '',
  //           isemailOnFocus: false,
  //           ispasswordOnFocus: false,
  //           isLoading: false,
  //         }}
  //         onSubmit={handleSubmit}
  //         onFocus={inputFocused}
  //       >
  //         {({
  //           values,
  //           handleChange,
  //           inputFocused,
  //           inputBlured,
  //           handleSubmit,
  //         }) => (
  //           <form
  //             // onSubmit={handleSubmit}
  //             className={styles.form}
  //           >
  //             {state.isLoading && (
  //               <div className="sweet-loading">
  //                 <RingLoader
  //                   css={override}
  //                   size={35}
  //                   color={'#ff6c00'}
  //                   loading={state.loading}
  //                 />
  //               </div>
  //             )}
  //             <label htmlFor={emailInputId} className={styles.nameLabel}>
  //               <input
  //                 value={values.email}
  //                 name="email"
  //                 type="email"
  //                 id={emailInputId}
  //                 className={styles.input}
  //                 placeholder={!state.isemailOnFocus ? 'Эл. почта' : ''}
  //                 onChange={handleChange}
  //                 onFocus={inputFocused}
  //                 onBlur={inputBlured}
  //               />
  //               {state.isemailOnFocus ? <span>E-mail</span> : null}
  //             </label>
  //             <label htmlFor={passwordInputId} className={styles.nameLabel}>
  //               <input
  //                 value={values.password}
  //                 name="password"
  //                 type="password"
  //                 id={passwordInputId}
  //                 className={styles.input}
  //                 placeholder={!state.ispasswordOnFocus ? 'Пароль' : ''}
  //                 onChange={handleChange}
  //                 onFocus={inputFocused}
  //                 // onFocus={inputFocused}
  //                 onBlur={inputBlured}
  //               />
  //               {state.ispasswordOnFocus ? <span>Пароль</span> : null}
  //             </label>
  //             <button type="submit" className={styles.registration_btn}>
  //               Войти
  //             </button>
  //             <pre>{JSON.stringify(values, null, 2)}</pre>
  //           </form>
  //         )}
  //       </Formik>

  //       <p className={styles.form_description}>
  //         Еще нет аккаунта?<NavLink to="/"> Зарегистрироваться</NavLink>
  //       </p>
  //     </div>
  //   );
}

export default LoginForm;
