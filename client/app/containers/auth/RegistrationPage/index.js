import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { userActions } from "Actions";

import FormWrapper from "Components/FormWrapper";
import FormLink from "Components/FormLink";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        confirmed_password: "",
        age: 18,
        gender: "female"
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
    // if (user.firstName && user.lastName && user.username && user.password) {
    dispatch(userActions.register(user));
    // }
  }

  render() {
    // const { registering } = this.props;
    // const { user, submitted } = this.state;
    const { user } = this.state;
    return (
      <FormWrapper>
        <h1 className="title">Register to dynamo</h1>
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
            <label className="label" htmlFor="email">
              Email address
            </label>
            <div className="control">
              <input
                name="email"
                type="email"
                className="input"
                id="email"
                value={user.email}
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
            <label className="label" htmlFor="confirmed_password">
              Confirm Password
            </label>
            <div className="control">
              <input
                name="confirmed_password"
                type="password"
                className="input"
                id="confirmed_password"
                value={user.confirmed_password}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="age">
              Age
            </label>
            <div className="control">
              <input
                name="age"
                type="number"
                className="input"
                id="age"
                min="18"
                value={user.age}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="gender">
              Gender
            </label>
            <div className="control">
              <div className="select">
                <select
                  name="gender"
                  id="gender"
                  value={user.gender}
                  onChange={this.handleChange}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" type="submit">
                Register
              </button>
            </div>
          </div>
          <div>
            Already have an account?&nbsp;
            <FormLink to="/login">Login</FormLink>
          </div>
        </form>
      </FormWrapper>
    );
  }
}

Registration.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  const { registering } = state.registration;
  return { registering };
};

const connectedRegistrationPage = connect(mapStateToProps)(Registration);
export { connectedRegistrationPage as RegistrationPage };
