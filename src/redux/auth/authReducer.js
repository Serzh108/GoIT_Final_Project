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
    authRegister: (state, { payload }) => ({
      ...state,
      userName: payload,
    }),
    authSignIn: (state, { payload }) => ({
      ...state,
      // userName: state.userName,
      access_token: payload,
      isAuth: true,
    }),
    authSignOut: (state, { payload }) => ({
      // userName: null,
      ...state,
      isAuth: false,
      access_token: null,
    }),
  },
});
