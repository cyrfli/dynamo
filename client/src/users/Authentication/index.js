import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { authenticationActions } from "./duck";

import FormWrapper from "../../common/FormWrapper";
import FormLink from "../../common/FormLink";
import { RenderInputField } from "../../common/RenderField";

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { login } = this.props;
    login(values.username, values.password);
  }

  render() {
    const { handleSubmit, invalid, pristine } = this.props;
    return (
      <FormWrapper>
        <h1 className="title">Log in to dynamo</h1>
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
            label="Password"
            labelFor="password"
            name="password"
            type="password"
            icon="fas fa-lock"
            component={RenderInputField}
          />
          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                type="submit"
                disabled={invalid || pristine}
              >
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

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Enter an username";
  }
  if (!values.password) {
    errors.password = "Enter a password";
  }

  return errors;
};

Authentication.propTypes = {
  login: PropTypes.func,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool
};

/* const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}; */

export default reduxForm({
  validate,
  form: "AuthenticateForm"
})(
  connect(
    null,
    { login: authenticationActions.login }
  )(Authentication)
);
