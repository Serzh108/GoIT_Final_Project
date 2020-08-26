import React, { Component } from 'react';
// import shortid from 'shortid';
import styles from './LoginForm.module.css';

class LoginFormN extends Component {
  state = {
    email: '',
    password: '',
  };
  emailInputId = new Date();
  passwordInputId = new Date();

  // emailInputId = shortid.generate();
  // passwordInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    console.log('this.state = ', this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.emailInputId}>
          email
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            id={this.emailInputId}
          />
        </label>
        <br />
        <label htmlFor={this.passwordInputId}>
          password
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id={this.passwordInputId}
          />
        </label>

        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default LoginFormN;
