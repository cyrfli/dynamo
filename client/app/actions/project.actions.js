import { projectConstants } from "Constants";
import { projectService } from "Services";
import { alertActions } from "Actions";
import { history } from "Helpers";

const create = (projectParam) => {
  const request = () => ({
    type: projectConstants.CREATE_REQUEST,
    projectParam
  });
  const success = (project) => ({
    type: projectConstants.CREATE_SUCCESS,
    project
  });
  const failure = (error) => ({ type: projectConstants.CREATE_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    projectService.create(projectParam).then(
      (project) => {
        dispatch(success(project));
        history.push("/projects");
        dispatch(alertActions.success("Project created"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

const getByUserId = (id) => {
  const request = (projects) => ({
    type: projectConstants.GETBYUSER_REQUEST,
    projects
  });
  const success = (projects) => ({
    type: projectConstants.GETBYUSER_SUCCESS,
    projects
  });
  const failure = (error) => ({
    type: projectConstants.GETBYUSER_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(request());

    projectService
      .getByUserId(id)
      .then(
        (projects) => dispatch(success(projects)),
        (error) => dispatch(failure(error.toString()))
      );
  };
};

const getAll = () => {
  const request = (projects) => ({
    type: projectConstants.GETALL_REQUEST,
    projects
  });
  const success = (projects) => ({
    type: projectConstants.GETALL_SUCCESS,
    projects
  });
  const failure = (error) => ({ type: projectConstants.GETALL_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    projectService
      .getAll()
      .then(
        (projects) => dispatch(success(projects)),
        (error) => dispatch(failure(error.toString()))
      );
  };
};

export const projectActions = {
  create,
  getAll,
  getByUserId
};
