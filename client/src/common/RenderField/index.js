import React from "react";
import PropTypes from "prop-types";

export const RenderInputField = (props) => {
  const {
    meta: { touched, error },
    type,
    input,
    icon
  } = props;
  const controlClasses = `control has-icons-left${
    touched && error ? " has-icons-right" : ""
  }`;
  const inputClasses = `input${touched && error ? " is-danger" : ""}`;
  return (
    <div className="field">
      <Label {...props} />
      <div className={controlClasses}>
        <input className={inputClasses} type={type} {...input} />
        <span className="icon is-small is-left">
          <i className={icon} />
        </span>
        {touched &&
          error && (
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle" />
            </span>
          )}
      </div>
      <Error {...props} />
    </div>
  );
};

RenderInputField.propTypes = {};

export const RenderTextareaField = (props) => {
  const {
    meta: { touched, error },
    input
  } = props;
  const textareaClasses = `textarea${touched && error ? " is-danger" : ""}`;
  return (
    <div className="field">
      <Label {...props} />
      <div className="control">
        <textarea name="description" className={textareaClasses} {...input} />
      </div>
      <Error {...props} />
    </div>
  );
};

RenderTextareaField.propTypes = {
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  })
};

const Label = (props) => {
  const { label, htmlFor } = props;
  return (
    <label className="label" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

Label.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string
};

const Error = (props) => {
  const {
    meta: { touched, error }
  } = props;
  if (touched && error) {
    return <p className="help is-danger">{error}</p>;
  }
  return null;
};

Error.propTypes = {
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  })
};
