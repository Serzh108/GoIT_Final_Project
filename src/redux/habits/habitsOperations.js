import axios from '../../api/axios';

const getHabit = newHabit => async (dispatch, getState) => {
  const token = getState();
  const tokenToSend = token.auth.access_token;
  console.log('tokenToSend', tokenToSend);
  console.log('get started!');
  try {
    const responseGet = await axios.get('/habits');
    console.log('responseGet = ', responseGet);
    console.log('responseGet.status = ', responseGet.status);
    console.log('responseGet.data = ', responseGet.data);
  } catch (error) {
    console.log('error', error);
  }
  console.log('get finished!');
};

const createHabit = newHabit => async (dispatch, getState) => {
  // debugger
  //   const token = getState();
  //   const tokenToSend = token.auth.access_token;
  //   console.log('tokenToSend', tokenToSend);
  console.log('create started!');
  try {
    const responseCreate = await axios.post('/habits', { name: newHabit });
    console.log('responseCreate = ', responseCreate);
    console.log('responseCreate.status = ', responseCreate.status);
    console.log('responseCreate.data = ', responseCreate.data);
    if (responseCreate.status === 200) {
      //   const name = JSON.parse(responseCreate.config.data).name;
      //   dispatch(authSlice.actions.authRegister(name));
    }
  } catch (error) {
    console.log('error', error);
  }
  console.log('create finished!');
};

const deleteHabit = habitId => async dispatch => {
  console.log('delete started');
  try {
    const deletedHabit = await axios.delete(`/habits/${habitId}`);
    console.log('responseDelete = ', deletedHabit);
    console.log('responseDelete.status = ', deletedHabit.status);
  } catch (error) {
    console.log('error', error);
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
  } catch (error) {
    console.log('error', error);
  }
  console.log('update finished!');
};

const updateHabitData = () => async dispatch => {
  console.log('data update started');
  // try {
  //   const updateHabit = await axios.patch('/habits', {
  //     id,
  //     name: habit,
  //   });
  //   console.log('responseUpdate = ', updateHabit);
  //   console.log('responseUpdate.status = ', updateHabit.status);
  // } catch (error) {
  //   console.log('error', error);
  // }

  console.log('data update finished');

}

export default { getHabit, createHabit, deleteHabit, updateHabitName };
