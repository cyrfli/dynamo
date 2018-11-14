import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import alert from "../alert/duck";
import authentication, { LOGOUT } from "../users/Authentication/duck";
import registration from "../users/Registration/duck";
import projects from "../projects/duck";
import tasks from "../tasks/duck";

const appReducer = combineReducers({
  form: formReducer,
  authentication,
  registration,
  alert,
  projects,
  tasks
});

export const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === LOGOUT) {
    newState = undefined;
  }
  return appReducer(newState, action);
};
