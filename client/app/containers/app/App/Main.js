import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMain = styled.main`
  width: 55% !important;
`;

const Main = (props) => {
  const { children, className } = props;
  const classNames = ["container", className].join(" ");
  return <StyledMain className={classNames}>{children}</StyledMain>;
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
};

export default Main;
