import { projectConstants } from "Constants";

const initialState = { loading: false, error: {}, items: [] };

export function project(state = initialState, action) {
  switch (action.type) {
    case projectConstants.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case projectConstants.CREATE_SUCCESS:
      return {
        ...state,
        items: [action.project],
        loading: false
      };
    case projectConstants.CREATE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case projectConstants.GETALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case projectConstants.GETALL_SUCCESS:
      return {
        ...state,
        items: action.projects,
        loading: false
      };
    case projectConstants.GETALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case projectConstants.GETBYUSER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case projectConstants.GETBYUSER_SUCCESS:
      return {
        ...state,
        items: action.projects,
        loading: false
      };
    case projectConstants.GETBYUSER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
