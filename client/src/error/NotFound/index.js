import React from "react";
import { history } from "../../helpers";
import Container from "../../common/Container";

const NotFound = () => (
  <Container className="has-text-centered">
    <h1 className="title">Page not found</h1>
    <button type="button" className="button is-link" onClick={history.goBack}>
      Go back
    </button>
  </Container>
);

export default NotFound;
