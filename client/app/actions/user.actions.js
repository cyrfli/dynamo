import { userConstants } from "Constants";
import { userService } from "Services";
import { alertActions } from "Actions";
import { history } from "Helpers";

const login = (username, password) => {
  const request = (user) => ({ type: userConstants.LOGIN_REQUEST, user });
  const success = (user) => ({ type: userConstants.LOGIN_SUCCESS, user });
  const failure = (error) => ({ type: userConstants.LOGIN_FAILURE, error });

  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/home");
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
  return { type: userConstants.LOGOUT };
};

const register = (user) => {
  const request = () => ({ type: userConstants.REGISTER_REQUEST, user });
  const success = () => ({ type: userConstants.REGISTER_SUCCESS, user });
  const failure = (error) => ({ type: userConstants.REGISTER_FAILURE, error });

  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      () => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};

export const userActions = {
  login,
  logout,
  register
};
