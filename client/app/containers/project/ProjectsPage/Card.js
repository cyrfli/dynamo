import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

const Card = (props) => {
  const { project } = props;
  return (
    <div className="card is-shadowed">
      <CardHeader className="card-header">
        <p className="card-header-title">{project.title}</p>
      </CardHeader>
      <CardBody className="card-content">
        <div className="content">{project.description}</div>
      </CardBody>
      <CardFooter className="card-footer">
        <div style={{ width: "100%" }}>
          Updated&nbsp;
          {moment(project.updatedAt).fromNow()}
        </div>
      </CardFooter>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    authorId: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  })
};

export default Card;
