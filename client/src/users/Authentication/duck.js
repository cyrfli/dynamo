import { userService } from "../service";
import { history } from "../../helpers";
import { alertActions } from "../../alert/duck";

const REQUEST = "dynamo/authentication/REQUEST";
const SUCCESS = "dynamo/authentication/SUCCESS";
const FAILURE = "dynamo/authentication/FAILURE";
export const LOGOUT = "dynamo/authentication/LOGOUT";

const userItem = JSON.parse(localStorage.getItem("user"));
const initialState = userItem ? { loggedIn: true, user: userItem } : {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case FAILURE:
      return {};
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

const login = (username, password) => {
  const request = (user) => ({ type: REQUEST, user });
  const success = (user) => ({ type: SUCCESS, user });
  const failure = (error) => ({ type: FAILURE, error });

  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/timeline");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

const logout = () => {
  userService.logout();
  return { type: LOGOUT };
};

export const authenticationActions = {
  login,
  logout
};

export default reducer;
