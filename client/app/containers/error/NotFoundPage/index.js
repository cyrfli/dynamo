import React from "react";
import { history } from "Helpers";
// import FormLink from "Components/FormLink";
import Container from "Components/Container";

export const NotFoundPage = () => (
  <Container className="has-text-centered">
    <h1 className="title">Page not found</h1>
    <button type="button" className="button is-link" onClick={history.goBack}>
      Go back
    </button>
  </Container>
);
