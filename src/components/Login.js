import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login  extends Component {
  static propTypes = {
    loginAsync: PropTypes.func.isRequired,
    styles: PropTypes.object
  };

  render() {
    return (
      <div className="p-12">
        <form name="loginForm">
          <input name="username" type="text" className="form-select" aria-label="username" />
          <input name="password" type="password" className="form-select" aria-label="password" />
          <button className="btn btn-info" aria-label="login">xxx</button>
        </form>
      </div>
    );
  }
}
