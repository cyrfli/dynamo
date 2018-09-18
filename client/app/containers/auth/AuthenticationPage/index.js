import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { userActions } from "Actions";

import FormWrapper from "Components/FormWrapper";
import FormLink from "Components/FormLink";

class Authentication extends React.Component {
  constructor(props) {
    super(props);

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
        <h1 className="title">Log in to dynamo</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="username">
              Username
            </label>
            <div className="control">
              <input
                name="username"
                type="text"
                className="input"
                id="username"
                value={user.username}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <div className="control">
              <input
                name="password"
                type="password"
                className="input"
                id="password"
                value={user.password}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" /> Remember me
              </label>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div>
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
