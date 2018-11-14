import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { projectsActions } from "../duck";

import Project from "./Project";

class Dynamo extends React.Component {
  constructor(props) {
    super(props);

    this.selectProject = this.selectProject.bind(this);
  }

  componentDidMount() {
    const { fetchByUserId, user } = this.props;
    if (user !== undefined) {
      fetchByUserId(user.id);
    }
  }

  selectProject(e, project) {
    e.preventDefault();
    const { select } = this.props;
    select(project.id);
  }

  selectAllTask(e) {
    e.preventDefault();
  }

  render() {
    const { items, currentProject } = this.props;
    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <h1 className="title">My Projects</h1>
          <aside className="menu box is-shadowed">
            <ul className="menu-list">
              <li>
                <a href="/dynamo" onClick={this.selectAllTask}>
                  All
                </a>
              </li>
              {_.map(items, (project) => (
                <li key={project.id}>
                  <a
                    href="/dynamo"
                    onClick={(e) => this.selectProject(e, project)}
                  >
                    {project.title}
                  </a>
                </li>
              ))}

              <li>
                <Link to="/projects/new">
                  Create&nbsp;
                  <span className="icon is-small">
                    <i className="fas fa-plus" />
                  </span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column">{currentProject && <Project />}</div>
      </div>
    );
  }
}

const projectProps = {
  id: PropTypes.string,
  authorId: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

Dynamo.propTypes = {
  fetchByUserId: PropTypes.func,
  select: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  }),
  items: PropTypes.shape({
    key: PropTypes.shape(projectProps)
  }),
  currentProject: PropTypes.shape(projectProps)
};

const mapStateToProps = (state) => {
  const { user } = state.authentication;
  const { items, loading, error, current } = state.projects;
  return {
    user,
    items,
    loading,
    error,
    currentProject: current
  };
};

export default connect(
  mapStateToProps,
  {
    fetchByUserId: projectsActions.fetchByUserId,
    select: projectsActions.select
  }
)(Dynamo);
