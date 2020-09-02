import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './formInputAddHabit.module.css';
import habitsOperations from '../../redux/habits/habitsOperations';

const FormInputAddHabit = ({ setnewInput }) => {
  const dispatch = useDispatch();
  const [newHabit, setnewHabit] = useState('');

  const handleQueryChange = e => {
    setnewHabit(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('нас засабмитили:', newHabit);
    dispatch(habitsOperations.createHabit(newHabit));
    setnewInput(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={newHabit}
          autoFocus={true}
          onChange={handleQueryChange}
          placeholder="Название..."
          type="text"
          className={css.input}
        />
      </form>
    </>
  );
};

export default FormInputAddHabit;
