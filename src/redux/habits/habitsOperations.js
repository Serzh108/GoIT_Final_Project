import axios from '../../api/axios';
import { habitsSlice } from './habitsReducer';

import { notice, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const getHabit = newHabit => async (dispatch, getState) => {
  // const token = getState();
  // const tokenToSend = token.auth.access_token;
  // console.log('tokenToSend : ', tokenToSend);
  console.log('get started!');
  try {
    const responseGet = await axios.get('/habits');
    // console.log('responseGet = ', responseGet);
    console.log('responseGet.data = ', responseGet.data);

    dispatch(habitsSlice.actions.getAllHabits(responseGet.data));
  } catch (err) {
    error({
      title: 'Oh No!',
      text: err.response.data,
    });

    console.log('error', err);
  }
  console.log('get finished!');
};

const createHabit = newHabit => async (dispatch, getState) => {
  //   const token = getState();
  //   const tokenToSend = token.auth.access_token;
  //   console.log('tokenToSend', tokenToSend);
  console.log('create started!');
  try {
    const responseCreate = await axios.post('/habits', { name: newHabit });
    // console.log('responseCreate = ', responseCreate);
    console.log('responseCreate.data = ', responseCreate.data);

    dispatch(habitsSlice.actions.addHabit(responseCreate.data));
  } catch (err) {
    error({
      title: 'Oh No!',
      text: err.response.data,
    });

    console.log('error', err);
  }
  console.log('create finished!');
};

const deleteHabit = habitId => async dispatch => {
  console.log('delete started');
  // const q = '5f4ebb1a98309b0017529b44'
  try {
    // const deletedHabit = await axios.delete(`/habits/${q}`);
    const deletedHabit = await axios.delete(`/habits/${habitId}`);
    console.log('responseDelete = ', deletedHabit);
    console.log('responseDelete.status = ', deletedHabit.status);
    console.log('responseDelete = ', deletedHabit.statusText);
    if (deletedHabit.statusText === 'OK') {
      dispatch(habitsSlice.actions.deleteHabit(habitId));
      // dispatch(habitsSlice.actions.deleteHabit(q));
    }
  } catch (err) {
    error({
      title: 'Oh No!',
      text: err.response.data,
    });

    console.log('error', err);
  }
  console.log('delete finished!');
};

const updateHabitName = (habit, id) => async dispatch => {
  console.log('update started');
  try {
    const updateHabit = await axios.patch('/habits', {
      id,
      name: habit,
    });
    console.log('responseUpdate = ', updateHabit);
    console.log('responseUpdate.status = ', updateHabit.status);
  } catch (err) {
    error({
      title: 'Oh No!',
      text: err.response.data,
    });

    console.log('error', err);
  }
  console.log('update finished!');
};

const updateHabitData = (id, data) => async dispatch => {
  console.log('data update started');
  console.log('id', id);
  console.log('data', data);
  const dataObj = { id, data };
  console.log('data!!!!!!!!', dataObj);
  const updateData = JSON.stringify(dataObj);
  console.log('updateData!!!!', updateData);
  try {
    const updateHabit = await axios.patch('/habits', updateData);
    console.log('responseUpdate = ', updateHabit);
    console.log('responseUpdate.status = ', updateHabit.status);
    dispatch(habitsSlice.actions.updateHabitData(updateHabit.data));
  } catch (err) {
    error({
      title: 'Oh No!',
      text: err.response.data,
    });

    console.log('error', err);
  }

  console.log('data update finished');
};

export default {
  getHabit,
  createHabit,
  deleteHabit,
  updateHabitName,
  updateHabitData,
};
