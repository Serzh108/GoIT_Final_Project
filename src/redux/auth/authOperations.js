import axios from 'axios';
import { authSlice } from './authReducer';

import { notice, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

axios.defaults.baseURL = 'https://api-habit.herokuapp.com';

const registrationEndpoint = '/auth/registration';
const loginEndpoint = '/auth/login';

// const history = useHistory()

const registration = userData => async dispatch => {
  console.log('registration started!');
  try {
    const responseRegistration = await axios.post(
      registrationEndpoint,
      userData,
    );
    console.log('responseRegistration = ', responseRegistration);
    console.log('responseRegistration.status = ', responseRegistration.status);
    console.log('responseRegistration.data = ', responseRegistration.data);
    if (responseRegistration.status === 201) {
      const name = JSON.parse(responseRegistration.config.data).name;

      dispatch(authSlice.actions.authRegister(name));
      notice({
        title: 'Please confirm your email',
        text: 'Check your email (inbox or spam)',
      });

      // history.replace('/login')
    }
  } catch (err) {
    error({
      title: 'Oh No!',
      text: err.response.data,
    });
    console.log('error===', err.response.data);
  }
  console.log('registration finished!');
};

const login = userData => async dispatch => {
  console.log('login started!');
  try {
    const responseLogin = await axios.post(loginEndpoint, userData);
    console.log('responseLogin = ', responseLogin);
    console.log('status = ', responseLogin.status);
    console.log('access_token = ', responseLogin.data.access_token);
    dispatch(authSlice.actions.authSignIn(responseLogin.data.access_token));
  } catch (error) {
    console.log('error', error);
  }
  console.log('login finished!');
};

const signOut = () => async dispatch => {
  dispatch(authSlice.actions.authSignOut());
};

export default { registration, login, signOut };

// Heroku host: https://api-habit.herokuapp.com/
// Auth
// Login
// URN: /auth/login
// METHOD: POST
// BODY:
// Request:
// {
//   "email": "naydyonovdanil@gmail.com",
//   "password": "Qwerty123"
// }

// Response: status 200
// {
//   "access_token": <JWT token>
// }
// Registration
// URN: /auth/registration
// METHOD: POST
// BODY:
// Request:
// {
//   "name": "Danil",
//   "email": "naydyonovdanil@gmail.com",
//   "password": "Qwerty123"
// }
// Response: status 201
