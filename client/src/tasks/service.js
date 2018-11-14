import _ from "lodash";
import axios from "axios";
import { authHeader } from "../helpers";

const create = (task) => {
  const requestOptions = {
    method: "post",
    headers: _.assign({}, { "Content-Type": "application/json" }, authHeader()),
    data: task,
    url: "/api/tasks"
  };

  return fetch(requestOptions);
};

const fetchAll = () => {
  const requestOptions = {
    method: "get",
    headers: _.assign({}, { "Content-Type": "application/json" }, authHeader()),
    url: "/api/tasks"
  };

  return fetch(requestOptions);
};

const fetchByProjectId = (id) => {
  const requestOptions = {
    method: "get",
    headers: _.assign({}, { "Content-Type": "application/json" }, authHeader()),
    url: `/api/tasks/project/${id}`
  };

  return axios(requestOptions);
};

const fetchOneById = (id) => {
  const requestOptions = {
    method: "get",
    headers: _.assign({}, { "Content-Type": "application/json" }, authHeader()),
    url: `/api/tasks/${id}`
  };

  return axios(requestOptions);
};

export const tasksService = {
  create,
  fetchAll,
  fetchByProjectId,
  fetchOneById
};
