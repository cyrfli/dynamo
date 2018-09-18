import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { projectActions } from "Actions";

import Card from "./Card";
import CardAdd from "./CardAdd";

class Projects extends React.Component {
  componentDidMount() {
    const { dispatch, user } = this.props;
    dispatch(projectActions.getByUserId(user.id));
  }

  render() {
    const { items } = this.props;
    return (
      <div className="columns is-multiline">
        {items.map((project) => (
          <div key={project.id} className="column is-one-quarter">
            <Card project={project} />
          </div>
        ))}
        <CardAdd />
      </div>
    );
  }
}

Projects.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.shape({
    _id: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    token: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      authorId: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string
    })
  )
};

const mapStateToProps = (state) => {
  const { user } = state.authentication;
  const { items, loading, error } = state.project;
  return {
    user,
    items,
    loading,
    error
  };
};

const connectedProjectsPage = connect(mapStateToProps)(Projects);
export { connectedProjectsPage as ProjectsPage };
