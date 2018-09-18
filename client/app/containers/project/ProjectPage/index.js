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
        <h1 className="title">Create a Project</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="title">
              Title
            </label>
            <div className="control">
              <input
                name="title"
                type="text"
                className="input"
                id="title"
                value={project.title}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="description">
              Description
            </label>
            <div className="control">
              <textarea
                name="description"
                type="description"
                className="textarea"
                id="description"
                value={project.description}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-link" type="submit">
                Create
              </button>
            </div>
          </div>

          <div>
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
