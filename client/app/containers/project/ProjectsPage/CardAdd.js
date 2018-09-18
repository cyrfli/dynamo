import React from "react";
import { Link } from "react-router-dom";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const CardAdd = () => (
  <div className="column is-one-quarter">
    <div className="card is-shadowed">
      <CardHeader className="card-header">
        <p className="card-header-title">Add a new project</p>
      </CardHeader>
      <CardBody className="card-content">
        <div className="content has-text-centered">
          <Link className="icon is-large" to="/project">
            <i className="fas fa-3x fa-plus" />
          </Link>
        </div>
      </CardBody>
    </div>
  </div>
);

export default CardAdd;
