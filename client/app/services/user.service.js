const logout = () => {
  // remove user from local storage to log user out
  window.localStorage.removeItem("user");
};

const handleResponse = (response) =>
  response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      if (response.status === 504) {
        data.message = "Gateway error";
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    if (data.errors) {
      return Promise.reject(data.message);
    }

    return data;
  });

const login = (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch("/api/users/authenticate", requestOptions)
    .then(handleResponse)
    .then((user) => {
      // login successful if there's a jwt token in the response
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
    body: JSON.stringify(user)
  };

  return fetch("/api/users/register", requestOptions).then(handleResponse);
};

export const userService = {
  login,
  logout,
  register
};
