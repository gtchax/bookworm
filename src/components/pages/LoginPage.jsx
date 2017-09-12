import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm.jsx';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


class LoginPage extends Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/"));
  
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

LoginPage.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }).isRequired,
  login: propTypes.func.isRequired
}

export default connect(null, { login })(LoginPage)
