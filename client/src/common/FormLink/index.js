import styled from "styled-components";
import { Link } from "react-router-dom";

const FormLink = styled(Link)`
  color: #007bff;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
`;

export default FormLink;
