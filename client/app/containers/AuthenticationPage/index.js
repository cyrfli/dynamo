import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { userActions } from "Actions";

import FormWrapper from "Components/FormWrapper";
import FormLink from "Components/FormLink";

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    const { dispatch } = this.props;
    dispatch(userActions.logout());

    this.state = {
      user: {
        username: "",
        password: ""
      }
      // submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.username && user.password) {
      dispatch(userActions.login(user.username, user.password));
    }
  }

  render() {
    // const { loggingIn } = this.props;
    // const { user, submitted } = this.state;
    const { user } = this.state;
    return (
      <FormWrapper>
        <h3 className="mb-3">Log in to dynamo</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              value={user.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              value={user.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
          <div className="mt-3">
            Don’t have an account?&nbsp;
            <FormLink to="/register">Register</FormLink>
          </div>
        </form>
      </FormWrapper>
    );
  }
}

Authentication.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
};

const connectedAuthenticationPage = connect(mapStateToProps)(Authentication);
export { connectedAuthenticationPage as AuthenticationPage };
