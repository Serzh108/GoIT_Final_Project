import React from 'react';
import css from './formInputAddHabit.module.css';

const FormInputAddHabit = () => {
  return (
    <>
      <input placeholder="Название..." type="text" className={css.input} />
    </>
  );
};

export default FormInputAddHabit;
