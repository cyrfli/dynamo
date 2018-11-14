import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";

/* const loremIpsum = [
  "Donec justo lorem, porta vitae viverra ultricies, aliquam lacinia massa.",
  "Maecenas commodo pellentesque magna id fringilla. Donec in molestie arcu, a dapibus libero. Maecenas tempus, eros a vehicula ultricies, leo est consectetur nunc, lacinia congue.",
  "Proin et sem eu nunc elementum facilisis. Aenean egestas eget mauris eget hendrerit. Donec ut dui ut est viverra convallis ut eget urna. In placerat sem vel hendrerit luctus. Etiam lacinia, nunc sit amet commodo lacinia, turpis ligula accumsan justo, eu laoreet nisl tellus eu leo. Pellentesque tristique tellus sit.",
  "Mauris eget laoreet felis, sit amet dictum ante. Integer id sodales erat. Cras vulputate, nisi et bibendum egestas, mauris lorem cursus purus, sit amet pretium ante dolor egestas velit. Nam vel nibh dui. Pellentesque semper, orci vel pulvinar ultricies, neque dolor scelerisque erat, a efficitur justo metus sit amet arcu. Proin ut libero ac eros lacinia malesuada ut at arcu. Ut ut tortor libero. Fusce rutrum, turpis id ornare tempus, eros purus mattis odio, ac."
]; */

const CardHeader = styled.div`
  word-break: break-all;
`;

const CardBody = styled.div`
  padding: 0.75rem;

  & .content {
    height: 100%;
    justify-content: center;
  }

  & .icon {
    margin-bottom: 0.35rem;
  }
`;

const CardFooter = styled.div`
  font-size: 0.65rem;
  font-style: italic;
  padding: 0.4rem 0.75rem;
  margin-top: auto;
`;

const StyledCard = styled.div`
  opacity: 0.75;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const Card = (props) => {
  const { project, onClick } = props;
  const { tasks } = project;
  return (
    <StyledCard className="card is-shadowed has-background" onClick={onClick}>
      <CardHeader className="card-header is-shadowless">
        <p className="card-header-title">{project.title}</p>
      </CardHeader>
      <CardBody className="card-content">
        <div className="content">
          {tasks.map((task) => (
            <div key={task.id}>{task.name}</div>
          ))}
        </div>
      </CardBody>
      <CardFooter className="card-footer">
        <div style={{ width: "100%" }}>
          Updated&nbsp;
          {moment(project.updatedAt).fromNow()}
        </div>
      </CardFooter>
    </StyledCard>
  );
};

Card.propTypes = {
  onClick: PropTypes.func,
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
