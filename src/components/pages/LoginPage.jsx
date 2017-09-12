import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm.jsx';


class LoginPage extends Component {
  submit() {
    return this.data;
  }
  render() {
    return (
      <div >
        <h1>Login Page</h1>
        <Link to="/" > Home </Link>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
