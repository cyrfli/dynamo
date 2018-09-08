import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { projectActions } from "Actions";

import FormWrapper from "Components/FormWrapper";
import FormLink from "Components/FormLink";

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        title: "",
        description: ""
      }
      // submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { project } = this.state;
    this.setState({
      project: {
        ...project,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.setState({ submitted: true });

    const { project } = this.state;
    const { dispatch } = this.props;
    // if (user.firstName && user.lastName && user.username && user.password) {
    dispatch(projectActions.create(project));
    // }
  }

  render() {
    // const { registering } = this.props;
    // const { user, submitted } = this.state;
    const { project } = this.state;
    return (
      <FormWrapper>
        <h3 className="mb-3">Create a Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="title"
              value={project.title}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              name="description"
              type="description"
              className="form-control"
              id="description"
              value={project.description}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Create
          </button>
          <div className="mt-3">
            Back to&nbsp;
            <FormLink to="/projects">Projects</FormLink>
          </div>
        </form>
      </FormWrapper>
    );
  }
}

Project.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  const { creating } = state.project;
  return { creating };
};

const connectedProjectPage = connect(mapStateToProps)(Project);
export { connectedProjectPage as ProjectPage };
