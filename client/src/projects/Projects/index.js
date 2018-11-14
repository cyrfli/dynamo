import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { projectsActions } from "../duck";

import NewProject from "./NewProject";
import Card from "./Card";
import Modal from "./Modal";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      project: {}
    };

    this.hideModal = this.hideModal.bind(this);
    this.handleEscapeModal = this.handleEscapeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  componentDidMount() {
    const { fetchByUserId, user } = this.props;
    if (user !== undefined) {
      fetchByUserId(user.id);
    }
  }

  hideModal() {
    this.setState({
      modal: false
    });
  }

  handleEscapeModal(e) {
    if (e.keyCode === 27) {
      this.hideModal();
    }
  }

  renderModal(project) {
    this.setState({
      modal: true,
      project
    });
  }

  render() {
    const { items } = this.props;
    const { modal, project } = this.state;
    return (
      <div>
        <NewProject />
        <div className="card-columns columns-6-fullhd columns-5-widescreen columns-4-desktop columns-3-tablet columns-2-mobile">
          {_.map(items, (p) => (
            <Card key={p.id} project={p} onClick={() => this.renderModal(p)} />
          ))}
        </div>
        <Modal
          className={modal ? "is-active" : ""}
          project={project}
          onClose={this.hideModal}
          onEscape={this.handleEscapeModal}
        />
      </div>
    );
  }
}

Projects.propTypes = {
  fetchByUserId: PropTypes.func,
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
    key: PropTypes.shape({
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
  })
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

export default connect(
  mapStateToProps,
  { fetchByUserId: projectsActions.fetchByUserId }
)(Projects);
