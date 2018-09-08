import { projectConstants } from "Constants";

export function project(state = {}, action) {
  switch (action.type) {
    case projectConstants.CREATE_REQUEST:
      return {
        loading: true
      };
    case projectConstants.CREATE_SUCCESS:
      return {
        items: action.project
      };
    case projectConstants.CREATE_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
