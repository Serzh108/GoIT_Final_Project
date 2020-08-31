import React from 'react';
import axios from 'axios';
// import {useDispatch} from 'react-redux'
import { authSlice } from './authReducer';
// import {useDispatch} from 'react'

axios.defaults.baseURL = 'https://api-habit.herokuapp.com';

const registrationEndpoint = '/auth/registration';
const loginEndpoint = '/auth/login';

const registration = async userData => {
  // const dispatch = useDispatch();
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
      //  dispatch(authSlice.actions.authRegister({
      //  }))
    }
  } catch (error) {
    console.log('error', error);
  }
  console.log('registration finished!');
};

const login = async userData => {
  console.log('login started!');
  try {
    const responseLogin = await axios.post(loginEndpoint, userData);
    console.log('responseLogin = ', responseLogin);
    console.log('status = ', responseLogin.status);
    console.log('access_token = ', responseLogin.data.access_token);
  } catch (error) {
    console.log('error', error);
  }
  console.log('login finished!');
};

export default { registration, login };

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
