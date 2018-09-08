import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { history } from "Helpers";
import { userActions } from "Actions";

import Wrapper from "./Wrapper";
import Nav from "./Nav";
import StyledNavLink from "./StyledNavLink";
import Brand from "./Brand";

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    history.push("/");
    dispatch(userActions.logout());
  }

  render() {
    const { authentication } = this.props;
    const { loggedIn } = authentication;
    const userLinks = (
      <Nav className="nav">
        <StyledNavLink className="nav-link" activeClassName="active" to="/home">
          Home
        </StyledNavLink>
        <StyledNavLink
          className="nav-link"
          activeClassName="active"
          to="/project"
        >
          Dynamos
        </StyledNavLink>
        <StyledNavLink
          className="nav-link"
          to="/logout"
          onClick={this.handleLogout}
        >
          Logout
        </StyledNavLink>
      </Nav>
    );
    const guestLinks = (
      <Nav className="nav">
        <StyledNavLink activeClassName="active" to="/register">
          Register
        </StyledNavLink>
        <StyledNavLink activeClassName="active" to="/login">
          Login
        </StyledNavLink>
      </Nav>
    );

    return (
      <Wrapper>
        <div>
          <h3>
            <Brand to="/">dynamo</Brand>
          </h3>
          {loggedIn ? userLinks : guestLinks}
        </div>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  authentication: PropTypes.shape({
    state: PropTypes.bool,
    user: PropTypes.shape({
      username: PropTypes.string,
      email: PropTypes.string,
      gender: PropTypes.string,
      age: PropTypes.number
    })
  })
};

const mapStateToProps = (state) => {
  const { authentication } = state;
  return { authentication };
};

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
