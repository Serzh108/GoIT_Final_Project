import axios from 'axios';
import React, { useState } from 'react';

axios.defaults.baseURL = 'https://api-habit.herokuapp.com';

const registrationEndpoint = '/auth/registration';
const loginEndpoint = '/auth/login';

const registration = async userData => {
  console.log('registration started!');
  try {
    const responseRegistration = await axios.post(
      registrationEndpoint,
      userData,
    );
    console.log('responseRegistration = ', responseRegistration);
    console.log('responseRegistration.status = ', responseRegistration.status);
    console.log('responseRegistration.data = ', responseRegistration.data);
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
