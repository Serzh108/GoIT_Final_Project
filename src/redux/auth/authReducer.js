import { createSlice } from '@reduxjs/toolkit';

const state = {
  userName: null,
  access_token: null,
  isAuth: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    authRegister: (state, { payload }) => ({
      userName: payload,
    }),
    // authSignIn: (state, {payload}) => ({
    //     userName: payload.userName,

    // })
  },
});
