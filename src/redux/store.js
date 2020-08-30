import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReduser = combineReducers({
  // user,
});

const store = configureStore({
  reducer: rootReduser,
});
