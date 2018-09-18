import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  width: 60% !important;
`;

const Container = (props) => {
  const { children, className } = props;
  const classNames = ["container", className].join(" ");
  return <StyledContainer className={classNames}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
};

export default Container;
