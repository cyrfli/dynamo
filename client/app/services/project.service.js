import { assign } from "lodash";
import { authHeader } from "Helpers";

const handleResponse = (response) =>
  response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    if (data.errors) {
      return Promise.reject(data.message);
    }

    return data;
  });

const create = (project) => {
  const requestOptions = {
    method: "POST",
    headers: assign({}, { "Content-Type": "application/json" }, authHeader()),
    body: JSON.stringify(project)
  };

  return fetch("/api/projects", requestOptions).then(handleResponse);
};

const getAll = () => {
  const requestOptions = {
    method: "GET",
    headers: assign({}, { "Content-Type": "application/json" }, authHeader())
  };

  return fetch("/api/projects", requestOptions).then(handleResponse);
};

const getByUserId = (id) => {
  const requestOptions = {
    method: "GET",
    headers: assign({}, { "Content-Type": "application/json" }, authHeader())
  };

  return fetch(`/api/projects/user/${id}`, requestOptions).then(handleResponse);
};

export const projectService = {
  create,
  getAll,
  getByUserId
};
