import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { registrationActions } from "./duck";

import FormWrapper from "../../common/FormWrapper";
import FormLink from "../../common/FormLink";
import { RenderInputField } from "../../common/RenderField";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { register } = this.props;
    register(values);
  }

  render() {
    const { handleSubmit, invalid, pristine } = this.props;
    return (
      <FormWrapper>
        <h1 className="title">Register to dynamo</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Username"
            labelFor="username"
            name="username"
            type="text"
            icon="fas fa-user"
            component={RenderInputField}
          />
          <Field
            label="Email"
            labelFor="email"
            name="email"
            type="email"
            icon="fas fa-envelope"
            component={RenderInputField}
          />
          <Field
            label="Password"
            labelFor="password"
            name="password"
            type="password"
            icon="fas fa-lock"
            component={RenderInputField}
          />
          <Field
            label="Confirm Password"
            labelFor="confirmed_password"
            name="confirmed_password"
            type="password"
            icon="fas fa-lock"
            component={RenderInputField}
          />
          <Field
            label="Age"
            labelFor="age"
            name="age"
            type="number"
            icon="fas fa-id-card"
            component={RenderInputField}
          />
          <div className="field">
            <label className="label" htmlFor="gender">
              Gender
            </label>
            <div className="control has-icons-left">
              <div className="select">
                <Field name="gender" component="select">
                  <option value="female" selected>
                    Female
                  </option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </Field>
              </div>
              <div className="icon is-small is-left">
                <i className="fas fa-transgender" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                type="submit"
                disabled={invalid || pristine}
              >
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

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Enter an username";
  }
  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.password) {
    errors.password = "Enter a password";
  }
  if (!values.confirmed_password) {
    errors.confirmed_password = "Enter a password";
  }
  if (values.confirmed_password !== values.password) {
    errors.confirmed_password = "Passwords do not match";
  }
  if (!values.age) {
    errors.age = "Enter an age";
  }
  if (values.age < 13) {
    errors.age = "You must be 13 or older to register";
  }

  return errors;
};

Registration.propTypes = {
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool
};

/* const mapStateToProps = (state) => {
  const { registering } = state.registration;
  return { registering };
}; */

export default reduxForm({
  validate,
  form: "RegisterForm"
})(
  connect(
    null,
    { register: registrationActions.register }
  )(Registration)
);
