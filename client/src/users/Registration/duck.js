import { userService } from "../service";
import { history } from "../../helpers";
import { alertActions } from "../../alert/duck";

const REQUEST = "dynamo/registration/REQUEST";
const SUCCESS = "dynamo/registration/SUCCESS";
const FAILURE = "dynamo/registration/FAILURE";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST:
      return { registering: true };
    case SUCCESS:
      return {};
    case FAILURE:
      return {};
    default:
      return state;
  }
};

const register = (user) => {
  const request = () => ({ type: REQUEST, user });
  const success = () => ({ type: SUCCESS, user });
  const failure = (error) => ({ type: FAILURE, error });

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

export const registrationActions = {
  register
};

export default reducer;
