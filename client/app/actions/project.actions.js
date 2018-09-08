import { projectConstants } from "Constants";
import { projectService } from "Services";
import { alertActions } from "Actions";
import { history } from "Helpers";

const create = (project) => {
  const request = () => ({ type: projectConstants.CREATE_REQUEST, project });
  const success = () => ({ type: projectConstants.CREATE_SUCCESS, project });
  const failure = (error) => ({ type: projectConstants.CREATE_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    projectService.create(project).then(
      () => {
        dispatch(success());
        history.push("/home");
        dispatch(alertActions.success("Project created"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

export const projectActions = {
  create
};
