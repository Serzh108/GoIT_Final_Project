import React from 'react';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Трекер привычек</h2>
      <p className={styles.title_description}>
        Попробуй прокачать 3 привычки бесплатно, мы знаем ты можешь!
      </p>
      <form input className={styles.form}>
        <input className={styles.input} placeholder="Имя" />
        <input className={styles.input} placeholder="Эл. почта" />
        <input className={styles.input} placeholder="Пароль" />
      </form>
      <button className={styles.registration_btn}>Зарегистрироваться</button>
      <p className={styles.form_description}>
        Уже есть аккаунт? <a href="#">Войти</a>
      </p>
    </div>
  );
}

export default RegistrationForm;
