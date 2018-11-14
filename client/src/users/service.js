import axios from "axios";

const logout = () => {
  // remove user from local storage to log user out
  window.localStorage.removeItem("user");
};

const login = (username, password) => {
  const requestOptions = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    data: { username, password },
    url: "/api/users/authenticate"
  };

  return axios(requestOptions).then((response) => {
    // login successful if there's a jwt token in the response
    const user = response.data;
    if (user.token) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      window.localStorage.setItem("user", JSON.stringify(user));
    }

    return user;
  });
};

const register = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: user,
    url: "/api/users/register"
  };

  return axios(requestOptions);
};

export const userService = {
  login,
  register,
  logout
};
