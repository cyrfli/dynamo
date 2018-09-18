import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { history } from "Helpers";

import { userActions } from "Actions";

class Logout extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(userActions.logout());
    history.push("/login");
  }

  render() {
    return <div>Sorry to see you go</div>;
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func
};

const connectedLogoutPage = connect()(Logout);
export { connectedLogoutPage as LogoutPage };
