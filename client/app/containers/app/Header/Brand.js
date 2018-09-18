import styled from "styled-components";
import { Link } from "react-router-dom";

const Brand = styled(Link)`
  font-weight: bold;
  font-size: 1.75rem;
  &:hover {
    color: #aaa;
    text-decoration: none;
  }
`;

export default Brand;
