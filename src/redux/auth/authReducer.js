import { createSlice } from '@reduxjs/toolkit';

const state = {
  userName: null,
  access_token: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    authRegister: (state, { payload }) => console.log('111', 111),
    // (

    //   {
    //     userName: payload,
    //   },
    // ),
    authSignIn: (state, { payload }) => ({
      access_token: payload.access_token,
      isAuth: true,
    }),
  },
});
