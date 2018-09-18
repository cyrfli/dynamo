import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Container from "Components/Container";
import Wrapper from "./Wrapper";
import Brand from "./Brand";
import MenuUser from "./MenuUser";
import MenuGuest from "./MenuGuest";

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const { loggedIn, user } = this.props;
    return (
      <Wrapper className="navbar is-shadowed">
        <Container>
          <div className="navbar-brand">
            <Brand className="navbar-item" to="/">
              Dynamo
            </Brand>
            <div className="navbar-burger burger" data-target="navbar-dynamo">
              <span />
              <span />
              <span />
            </div>
          </div>
          {loggedIn ? <MenuUser user={user} /> : <MenuGuest />}
        </Container>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
  user: PropTypes.shape({
    _id: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  })
};

const mapStateToProps = (state) => {
  const { loggedIn, user } = state.authentication;
  return { loggedIn, user };
};

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
