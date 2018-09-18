import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFormWrapper = styled.div`
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

const FormWrapper = (props) => {
  const { children, className } = props;
  const classNames = ["box", "is-shadowed", className].join(" ");
  return (
    <StyledFormWrapper className={classNames}>{children}</StyledFormWrapper>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
};

export default FormWrapper;
