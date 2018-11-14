import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { projectsActions } from "../duck";

import FormWrapper from "../../common/FormWrapper";
import FormLink from "../../common/FormLink";
import {
  RenderInputField,
  RenderTextareaField
} from "../../common/RenderField";

class ProjectCreate extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { createProject } = this.props;
    createProject(values);
  }

  render() {
    const { handleSubmit, invalid, pristine } = this.props;
    return (
      <FormWrapper>
        <h1 className="title">Create a Project</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            labelFor="title"
            name="title"
            type="text"
            icon="fas fa-heading"
            component={RenderInputField}
          />

          <Field
            label="Description"
            labelFor="description"
            name="description"
            component={RenderTextareaField}
          />

          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                type="submit"
                disabled={invalid || pristine}
              >
                Create
              </button>
            </div>
          </div>

          <div>
            Back to&nbsp;
            <FormLink to="/projects">Projects</FormLink>
          </div>
        </form>
      </FormWrapper>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.description) {
    errors.description = "Enter a description";
  }

  return errors;
};

ProjectCreate.propTypes = {
  createProject: PropTypes.func,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool
};

/* const mapStateToProps = (state) => {
  const { creating } = state.project;
  return { creating };
}; */

export default reduxForm({
  validate,
  form: "ProjectCreateForm"
})(
  connect(
    null,
    { createProject: projectsActions.create }
  )(ProjectCreate)
);
