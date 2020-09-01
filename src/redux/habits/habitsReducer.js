import { createSlice } from '@reduxjs/toolkit';

const state = {
  userName: null,
  total: null,
  habits: [],
};

export const habitsSlice = createSlice({
  name: 'habits',
  initialState: state,
  reducers: {
    getAllHabits: (state, { payload }) => ({
      userName: payload.userName,
      total: payload.total,
      habits: payload.habits,
    }),
    addHabit: (state, { payload }) => ({
      ...state,
      habits: [...state.habits, payload],
    }),
    deleteHabit: (state, { payload }) => ({
      ...state,
      habits: state.habits.filter(habit => habit._id !== payload),
    }),
    updateHabitData: (state, { payload }) => ({
      ...state,
      habits: [...state.habits, payload],
    }),
    updateHabitName: (state, { payload }) => ({
      ...state,
      habits: [...state.habits, payload],
    }),
  },
});
