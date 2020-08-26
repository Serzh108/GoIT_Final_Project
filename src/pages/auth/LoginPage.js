import React from 'react';
import styles from './LoginPage.module.css';
import LoginForm from './LoginFormN';

function LoginPage() {
  return (
    <div className={styles.page_container}>
      <header className={styles.header}></header>
      <section className={styles.section}>
        <div className={styles.formBox}>
          <LoginForm />
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
