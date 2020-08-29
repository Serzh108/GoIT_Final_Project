import React from 'react';
import css from './formInputAddHabit.module.css';

const FormInputAddHabit = () => {
  // const handleSubmit = e => {
  //   e.preventDefault();
  // };

  const handleQueryChange = e => {
    // console.log('e.target.value', e.target.value);
  };

  return (
    <>
      <input
        autoFocus={true}
        onChange={handleQueryChange}
        placeholder="Название..."
        type="text"
        className={css.input}
      />
    </>
  );
};

export default FormInputAddHabit;
