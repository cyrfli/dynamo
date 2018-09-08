import styled from "styled-components";
import { Link } from "react-router-dom";

const Brand = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  margin-bottom: 0;
  @media (min-width: 48em) {
    float: left;
  }
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

export default Brand;
