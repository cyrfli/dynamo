const mongoose = require("mongoose");

const Task = mongoose.model("Task");

async function getAll() {
  return await Task.find();
}

async function getByUserId(id) {
  const query = await Task.find({ authorId: id });
  return query;
}

async function getByProjectId(id) {
  const query = await Task.find({ projectId: id });
  return query;
}

async function getById(id) {
  return await Task.findById(id);
}

async function create(userId, taskParam) {
  const task = new Task(taskParam);
  task.authorId = userId;
  return await task.save();
}

async function update(id, taskParam) {
  const task = await Task.findById(id);

  // validate
  if (!task) throw "Task not found";

  // copy taskParam properties to task
  Object.assign({}, task, taskParam);

  return await task.save();
}

async function _delete(id) {
  await Task.findByIdAndRemove(id);
}

module.exports = {
  getAll,
  getByUserId,
  getByProjectId,
  getById,
  create,
  update,
  delete: _delete
};
