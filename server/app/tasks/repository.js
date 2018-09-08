const mongoose = require("mongoose");

const Task = mongoose.model("Task");
const User = mongoose.model("User");

const createTask = async (user, data) => {
    const { id } = user;

    const task = new Task(data);
    task.authorId = await User.findOne({ id });
    const query = await task.save();
    return query;
};

const findTasks = () => Task.find();

const findDetails = (id) => Task.findOne({ _id: id });

module.exports = {
    createTask,
    findTasks,
    findDetails,
};
