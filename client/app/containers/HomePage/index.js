import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <main role="main" className="cover">
    <h1 className="cover-heading">Dynamo</h1>
    <p className="lead">
      Dynamo Your Next Activity with Motivation and Organization
    </p>
    <p className="lead">
      <Link className="btn btn-lg btn-secondary" to="/register">
        Register
      </Link>
    </p>
  </main>
);

export default Home;
