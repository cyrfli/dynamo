import React from "react";

import Container from "../../common/Container";
import Wrapper from "./Wrapper";

const Footer = () => (
  <Wrapper className="footer">
    <Container className="has-text-centered">
      <p>
        <a href="https://bulma.io">
          <img
            src="https://bulma.io/images/made-with-bulma.png"
            alt="Made with Bulma"
            width="128"
            height="24"
          />
        </a>
      </p>
    </Container>
  </Wrapper>
);

export default Footer;
