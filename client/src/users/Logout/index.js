import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { history } from "../../helpers";

import { authenticationActions } from "../Authentication/duck";

class Logout extends Component {
  componentDidMount() {
    const { logout } = this.props;
    logout();
    history.push("/login");
  }

  render() {
    return <div>Sorry to see you go</div>;
  }
}

Logout.propTypes = {
  logout: PropTypes.func
};

export default connect(
  null,
  { logout: authenticationActions.logout }
)(Logout);
