import React from 'react';
import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Трекер привычек</h2>
      <p className={styles.title_description}>Вход</p>
      <form input className={styles.form}>
        <input className={styles.input} placeholder="Эл. почта" />
        <input className={styles.input} placeholder="Пароль" />
      </form>
      <button className={styles.registration_btn}>Войти</button>
      <p className={styles.form_description}>
        Еще нет аккаунта?<a href="#"> Зарегистрироваться</a>
      </p>
    </div>
  );
}

export default LoginForm;
