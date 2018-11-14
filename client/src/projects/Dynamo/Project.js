import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";

import { tasksActions } from "../../tasks/duck";

const StyledTask = styled.article`
  margin: 0.75rem 0;
  & .time {
    margin-left: 0.1rem;
    font-style: italic;
  }
`;

class Project extends React.Component {
  componentDidMount() {
    const { fetchTasksByProjectId, currentProject } = this.props;
    fetchTasksByProjectId(currentProject.id);
  }

  renderTasks(tasks) {
    if (!tasks) {
      return <div>No Task</div>;
    }
    return (
      <div>
        {_.map(tasks, (task) => (
          <StyledTask className="media box is-shadowed" key={task.id}>
            <figure className="media-left">
              <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{task.name}</strong>{" "}
                  <small className="time">
                    {moment(task.updatedAt).fromNow()}
                  </small>
                  <br />
                  {task.description}
                </p>
              </div>
            </div>
          </StyledTask>
        ))}
      </div>
    );
  }

  render() {
    const { currentProject, tasks } = this.props;
    return (
      <div>
        <h1 className="title">{currentProject.title}</h1>
        {this.renderTasks(tasks[currentProject.id])}
      </div>
    );
  }
}

Project.propTypes = {
  fetchTasksByProjectId: PropTypes.func,
  currentProject: PropTypes.shape({
    key: PropTypes.shape({
      id: PropTypes.string,
      authorId: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string
    })
  }),
  tasks: PropTypes.shape({
    key: PropTypes.shape({
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

const mapStateToProps = (state) => {
  const { current: currentProject } = state.projects;
  const { items: tasks } = state.tasks;
  return {
    currentProject,
    tasks
  };
};

export default connect(
  mapStateToProps,
  {
    fetchTasksByProjectId: tasksActions.fetchByProjectId
  }
)(Project);
