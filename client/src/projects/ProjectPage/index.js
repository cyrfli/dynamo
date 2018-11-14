import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { projectsActions } from "../duck";

import Card from "./Card";
import CardAdd from "./CardAdd";

class Project extends React.Component {
  componentDidMount() {
    if (this.props.project === undefined) {
      const { dispatch, match } = this.props;
      const { id } = match.params;
      dispatch(projectsActions.getById(id));
    }
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

Project.propTypes = {
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
  const { items, loading, error } = state.projects;
  return {
    user,
    items,
    loading,
    error
  };
};

const connectedProjectPage = connect(mapStateToProps)(Project);
export { connectedProjectPage as ProjectPage };
