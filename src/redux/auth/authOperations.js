import axios from 'axios';
import { authSlice } from './authReducer';
import { notice, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

axios.defaults.baseURL = 'https://api-habit.herokuapp.com';

const registrationEndpoint = '/auth/registration';
const loginEndpoint = '/auth/login';

const registration = userData => async dispatch => {
  console.log('registration started!');
  dispatch(authSlice.actions.setIsLoading());
  try {
    const responseRegistration = await axios.post(
      registrationEndpoint,
      userData,
    );
    if (responseRegistration.status === 201) {
      const name = JSON.parse(responseRegistration.config.data).name;
      dispatch(authSlice.actions.authRegister(name));
      notice({
        title: 'Please confirm your email',
        text: 'Check your email (inbox or spam)',
      });
    }
  } catch (err) {
    error({
      title: 'Oh No!',
      text: err.response.data,
    });
    console.log('error===', err.response.data);
  }
  dispatch(authSlice.actions.resetIsLoading());
  console.log('registration finished!');
};

const login = userData => async (dispatch, getState) => {
  console.log('login started!');
  dispatch(authSlice.actions.setIsLoading());
  console.log('GETSTATEisLoading', getState().isLoading);
  try {
    const responseLogin = await axios.post(loginEndpoint, userData);
    dispatch(authSlice.actions.authSignIn(responseLogin.data.access_token));
  } catch (err) {
    error({
      title: 'Oh No!',
      text: err.response.data,
    });
    console.log('error', err);
  }
  dispatch(authSlice.actions.resetIsLoading());
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
