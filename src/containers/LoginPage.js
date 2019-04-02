import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as loginActions from '../actions/login';

class LoginPage extends Component {
  render() {
    return (
      <Login {...this.props} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
});

const mapStateToProps = (state) => {
  const {
    user: { user }
  } = state;

  return { user };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
