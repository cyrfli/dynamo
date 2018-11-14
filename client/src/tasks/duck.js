import _ from "lodash";
import { history } from "../helpers";
import { tasksService } from "./service";
import { alertActions } from "../alert/duck";

const CREATE_REQUEST = "dynamo/tasks/CREATE_REQUEST";
const CREATE_SUCCESS = "dynamo/tasks/CREATE_SUCCESS";
const CREATE_FAILURE = "dynamo/tasks/CREATE_FAILURE";

const FETCHALL_REQUEST = "dynamo/tasks/FETCHALL_REQUEST";
const FETCHALL_SUCCESS = "dynamo/tasks/FETCHALL_SUCCESS";
const FETCHALL_FAILURE = "dynamo/tasks/FETCHALL_FAILURE";

const FETCHBYPROJECTID_REQUEST = "dynamo/tasks/FETCHBYPROJECTID_REQUEST";
const FETCHBYPROJECTID_SUCCESS = "dynamo/tasks/FETCHBYPROJECTID_SUCCESS";
const FETCHBYPROJECTID_FAILURE = "dynamo/tasks/FETCHBYPROJECTID_FAILURE";

const FETCHONEBYID_REQUEST = "dynamo/tasks/FETCHONEBYID_REQUEST";
const FETCHONEBYID_SUCCESS = "dynamo/tasks/FETCHONEBYID_SUCCESS";
const FETCHONEBYID_FAILURE = "dynamo/tasks/FETCHONEBYID_FAILURE";

const initialState = { loading: false, error: {}, items: {} };

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
      const items = _.mapKeys(action.payload, "projectId");
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
    case FETCHBYPROJECTID_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCHBYPROJECTID_SUCCESS: {
      const newTasks = _.groupBy(action.payload, "projectId");
      const items = _.assign({}, newTasks, state.items);
      return {
        ...state,
        items,
        loading: false
      };
    }
    case FETCHBYPROJECTID_FAILURE:
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
        items: { ...state.items, [action.payload.id]: action.payload }
      };
    case FETCHONEBYID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const create = (taskParam) => {
  const request = () => ({
    type: CREATE_REQUEST
  });
  const success = (task) => ({
    type: CREATE_SUCCESS,
    task
  });
  const failure = (error) => ({
    type: CREATE_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(request());

    tasksService.create(taskParam).then(
      (task) => {
        dispatch(success(task));
        history.push("/tasks");
        dispatch(alertActions.success("Task created"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

const fetchByProjectId = (id) => {
  const request = () => ({
    type: FETCHBYPROJECTID_REQUEST
  });
  const success = (response) => ({
    type: FETCHBYPROJECTID_SUCCESS,
    payload: response.data
  });
  const failure = (response) => ({
    type: FETCHBYPROJECTID_FAILURE,
    payload: response.error
  });

  return (dispatch) => {
    dispatch(request());

    tasksService
      .fetchByProjectId(id)
      .then(
        (tasks) => dispatch(success(tasks)),
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

    tasksService
      .fetchAll()
      .then(
        (tasks) => dispatch(success(tasks)),
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

    tasksService
      .fetchOneById(id)
      .then(
        (task) => dispatch(success(task)),
        (error) => dispatch(failure(error.toString()))
      );
  };
};

export const tasksActions = {
  create,
  fetchAll,
  fetchByProjectId,
  fetchOneById
};

export default reducer;
