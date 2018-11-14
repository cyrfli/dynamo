import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledModal = styled.div`
  & .task {
    padding: 0.25rem;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class Modal extends React.Component {
  render() {
    const { className, onClose, onEscape, project } = this.props;
    const { tasks } = project || {};
    return (
      <StyledModal className={`modal ${className}`}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className="modal-background"
          onClick={onClose}
          onKeyDown={onEscape}
        />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title" contentEditable>
              {project.title}
            </p>
            <button
              className="delete"
              aria-label="close"
              type="button"
              onClick={onClose}
            />
          </header>
          <section className="modal-card-body">
            {tasks &&
              tasks.map((task) => (
                <div className="task" key={task.id}>
                  {task.name}
                </div>
              ))}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" type="button">
              Save changes
            </button>
            <button className="button" type="button" onClick={onClose}>
              Cancel
            </button>
          </footer>
        </div>
      </StyledModal>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onEscape: PropTypes.func,
  project: PropTypes.shape({
    id: PropTypes.string,
    authorId: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    tasks: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      dueDate: PropTypes.string,
      projectId: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string
    })
  })
};

export default Modal;
