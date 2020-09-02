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
      total: payload.total,
      habits: state.habits.filter(habit => habit._id !== payload.habitId),
    }),
    updateHabitData: (state, { payload }) => ({
      ...state,
      total: payload.total,
      habits: state.habits.map(habit =>
        habit._id === payload.updatedHabit._id ? payload.updatedHabit : habit,
      ),
    }),
  },
});
