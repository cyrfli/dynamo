import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
  &:hover {
    border-bottom-color: rgba(255, 255, 255, 0.25);
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
  }
  & + & {
    margin-left: 1rem;
  }
  &.${activeClassName} {
    color: #fff;
    border-bottom-color: #fff;
  }
`;

export default StyledNavLink;
