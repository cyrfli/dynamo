import _ from "lodash";
import { projectsService } from "./service";
import { alertActions } from "../alert/duck";
import { history } from "../helpers";

const CREATE_REQUEST = "dynamo/projects/CREATE_REQUEST";
const CREATE_SUCCESS = "dynamo/projects/CREATE_SUCCESS";
const CREATE_FAILURE = "dynamo/projects/CREATE_FAILURE";

const FETCHALL_REQUEST = "dynamo/projects/FETCHALL_REQUEST";
const FETCHALL_SUCCESS = "dynamo/projects/FETCHALL_SUCCESS";
const FETCHALL_FAILURE = "dynamo/projects/FETCHALL_FAILURE";

const FETCHBYUSERID_REQUEST = "dynamo/projects/FETCHBYUSERID_REQUEST";
const FETCHBYUSERID_SUCCESS = "dynamo/projects/FETCHBYUSERID_SUCCESS";
const FETCHBYUSERID_FAILURE = "dynamo/projects/FETCHBYUSERID_FAILURE";

const FETCHONEBYID_REQUEST = "dynamo/projects/FETCHONEBYID_REQUEST";
const FETCHONEBYID_SUCCESS = "dynamo/projects/FETCHONEBYID_SUCCESS";
const FETCHONEBYID_FAILURE = "dynamo/projects/FETCHONEBYID_FAILURE";

const SELECT = "dynamo/projects/SELECT";

const initialState = { loading: false, error: {}, items: {}, current: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        items: { ...state.items, [action.payload.id]: action.payload },
        loading: false
      };
    case CREATE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case FETCHALL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCHALL_SUCCESS: {
      const items = _.mapKeys(action.payload, "id");
      return {
        ...state,
        items,
        loading: false
      };
    }
    case FETCHALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCHBYUSERID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCHBYUSERID_SUCCESS: {
      const first = action.payload[0];
      const newItems = _.mapKeys(action.payload, "id");
      const items = _.assign(state.items, newItems);
      return {
        ...state,
        current: first,
        items,
        loading: false
      };
    }
    case FETCHBYUSERID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCHONEBYID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCHONEBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        items: { ...state.items, [action.payload.id]: action.payload },
        current: action.payload
      };
    case FETCHONEBYID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case SELECT: {
      const item = state.items[action.payload];
      return {
        ...state,
        current: item
      };
    }
    default:
      return state;
  }
};

const create = (projectParam) => {
  const request = () => ({
    type: CREATE_REQUEST
  });
  const success = (project) => ({
    type: CREATE_SUCCESS,
    project
  });
  const failure = (error) => ({
    type: CREATE_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(request());

    projectsService.create(projectParam).then(
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

const fetchByUserId = (id) => {
  const request = () => ({
    type: FETCHBYUSERID_REQUEST
  });
  const success = (response) => ({
    type: FETCHBYUSERID_SUCCESS,
    payload: response.data
  });
  const failure = (response) => ({
    type: FETCHBYUSERID_FAILURE,
    payload: response.error
  });

  return (dispatch) => {
    dispatch(request());

    projectsService
      .fetchByUserId(id)
      .then(
        (projects) => dispatch(success(projects)),
        (error) => dispatch(failure(error.toString()))
      );
  };
};

const fetchAll = () => {
  const request = () => ({
    type: FETCHALL_REQUEST
  });
  const success = (response) => ({
    type: FETCHALL_SUCCESS,
    payload: response.data
  });
  const failure = (response) => ({
    type: FETCHALL_FAILURE,
    payload: response.error
  });

  return (dispatch) => {
    dispatch(request());

    projectsService
      .fetchAll()
      .then(
        (projects) => dispatch(success(projects)),
        (error) => dispatch(failure(error.toString()))
      );
  };
};

const fetchOneById = (id) => {
  const request = () => ({
    type: FETCHONEBYID_REQUEST
  });
  const success = (response) => ({
    type: FETCHONEBYID_SUCCESS,
    payload: response.data
  });
  const failure = (response) => ({
    type: FETCHONEBYID_FAILURE,
    payload: response.error
  });

  return (dispatch) => {
    dispatch(request());

    projectsService
      .fetchOneById(id)
      .then(
        (project) => dispatch(success(project)),
        (error) => dispatch(failure(error.toString()))
      );
  };
};

const select = (id) => ({
  type: SELECT,
  payload: id
});

export const projectsActions = {
  create,
  fetchAll,
  fetchByUserId,
  fetchOneById,
  select
};

export default reducer;
