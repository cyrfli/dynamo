const SUCCESS = "dynamo/alert/SUCCESS";
const ERROR = "dynamo/alert/ERROR";
const CLEAR = "dynamo/alert/CLEAR";

const alert = (state = {}, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        type: "is-success",
        message: action.message
      };
    case ERROR:
      return {
        type: "is-danger",
        message: action.message
      };
    case CLEAR:
      return {};
    default:
      return state;
  }
};

const success = (message) => ({ type: SUCCESS, message });
const error = (message) => ({ type: ERROR, message });
const clear = () => ({ type: CLEAR });

export const alertActions = {
  success,
  error,
  clear
};

export default alert;
