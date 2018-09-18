const projectService = require("./service");

function getAll(req, res, next) {
  projectService
    .getAll()
    .then((projects) => res.json(projects))
    .catch((err) => next(err));
}

function getByUserId(req, res, next) {
  projectService
    .getByUserId(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  projectService
    .getById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => next(err));
}

function create(req, res, next) {
  projectService
    .create(req.user.sub, req.body)
    .then((project) => res.json(project))
    .catch((err) => next(err));
}

function update(req, res, next) {
  projectService
    .update(req.params.id, req.body)
    .then((project) => res.json(project))
    .catch((err) => next(err));
}

function _delete(req, res, next) {
  projectService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch((err) => next(err));
}

module.exports = {
  getAll,
  getByUserId,
  getById,
  create,
  update,
  delete: _delete
};
