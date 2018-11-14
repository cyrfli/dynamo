import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledItem = styled.div`
  height: 9rem;
  padding: 0.75rem;

  & .description {
    margin-top: 0.5rem;
    opacity: 0.6;
  }

  &:hover {
    background-color: #fff;
    cursor: default;
    .description {
      opacity: 1;
    }
  }
`;

const Item = (props) => {
  const { children } = props;
  return <StyledItem className="column is-one-quarter">{children}</StyledItem>;
};

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node.isRequired]).isRequired
};

export default Item;
