import { combineReducers } from "redux";

import { authentication } from "Reducers/authentication.reducer";
import { registration } from "Reducers/registration.reducer";
import { users } from "Reducers/users.reducer";
import { alert } from "Reducers/alert.reducer";
import { project } from "Reducers/project.reducer";
import { userConstants } from "Constants/user.constants";

const appReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  project
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === userConstants.LOGOUT) {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
