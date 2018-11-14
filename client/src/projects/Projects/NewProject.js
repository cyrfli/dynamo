import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50%;
  margin: 0 auto 3rem auto;
`;

const NewProject = () => (
  <StyledDiv>
    <Link
      to="/projects/new"
      className="button is-link is-fullwidth"
      type="button"
    >
      New Project
    </Link>
  </StyledDiv>
);

export default NewProject;
