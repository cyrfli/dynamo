const mongoose = require("mongoose");

const Project = mongoose.model("Project");

async function getAll() {
  return await Project.find();
}

async function getByUserId(id) {
  const query = await Project.find({ authorId: id });
  return query;
}

async function getById(id) {
  return await Project.findById(id);
}

async function create(userId, projectParam) {
  const project = new Project(projectParam);
  project.authorId = userId;
  return await project.save();
}

async function update(id, projectParam) {
  const project = await Project.findById(id);

  // validate
  if (!project) throw "Project not found";

  // copy projectParam properties to project
  Object.assign({}, project, projectParam);

  return await project.save();
}

async function _delete(id) {
  await Project.findByIdAndRemove(id);
}

module.exports = {
  getAll,
  getByUserId,
  getById,
  create,
  update,
  delete: _delete
};
