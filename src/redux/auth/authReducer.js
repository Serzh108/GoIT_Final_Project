import { createSlice } from '@reduxjs/toolkit';

const state = {
  userName: null,
  access_token: null,
  isAuth: false,
};

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: state,
//   reducers: {
//     authRegister: (state, { payload }) => ({
//       userName: payload,
//     }),
//     // authSignIn: (state, {payload}) => ({
//     //     userName: payload.userName,

//     // })
//   },
// });

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    authSignIn: (state, { payload }) => ({
      userName: payload.userName,
      access_token: payload.token,
      isAuth: true,
    }),
  },
});
