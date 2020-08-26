import React from 'react';
import styles from './RegistrationPage.module.css';
import RegistrationForm from './RegistrationForm';

function RegistrationPage() {
  return (
    <div className={styles.page_container}>
      <header className={styles.header}></header>
      <section className={styles.section}>
        <div className={styles.formBox}>
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
}

export default RegistrationPage;
