import _ from "lodash";
import axios from "axios";
import { authHeader } from "../helpers";

const create = (project) => {
  const requestOptions = {
    method: "post",
    headers: _.assign({}, { "Content-Type": "application/json" }, authHeader()),
    data: project,
    url: "/api/projects"
  };

  return axios(requestOptions);
};

const fetchAll = () => {
  const requestOptions = {
    method: "get",
    headers: _.assign({}, { "Content-Type": "application/json" }, authHeader()),
    url: "/api/projects"
  };

  return axios(requestOptions);
};

const fetchByUserId = (id) => {
  const requestOptions = {
    method: "get",
    headers: _.assign({}, { "Content-Type": "application/json" }, authHeader()),
    url: `/api/projects/user/${id}`
  };

  return axios(requestOptions);
};

const fetchOneById = (id) => {
  const requestOptions = {
    method: "get",
    headers: _.assign({}, { "Content-Type": "application/json" }, authHeader()),
    url: `/api/projects/${id}`
  };

  return axios(requestOptions);
};

export const projectsService = {
  create,
  fetchAll,
  fetchByUserId,
  fetchOneById
};
