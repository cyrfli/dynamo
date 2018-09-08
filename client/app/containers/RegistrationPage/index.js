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
        <h3 className="mb-3">Register to dynamo</h3>
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
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={this.handleChange}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We’ll never share your email with anyone else.
            </small>
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
          <div className="form-group">
            <label htmlFor="confirmed_password">Confirm Password</label>
            <input
              name="confirmed_password"
              type="password"
              className="form-control"
              id="confirmed_password"
              value={user.confirmed_password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              name="age"
              type="number"
              className="form-control"
              id="age"
              min="18"
              value={user.age}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              className="form-control"
              id="gender"
              value={user.gender}
              onChange={this.handleChange}
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>
          <div className="Register-login mt-3">
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
