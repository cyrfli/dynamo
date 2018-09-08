const utilities = require("../../utilities");
const repository = require("./repository");

exports.create = async (req, res) => {
    try {
        const { user } = req;
        const task = await repository.createTask(user, req.body);
        res.success(utilities.extractObject(
        task,
        [ "id", "title", "description" ],
    ));
    } catch (err) {
        res.send(err);
    }
};

exports.update = (req, res) => {
    res.success();
};

exports.delete = (req, res) => {
    res.success();
};

exports.list = async (req, res) => {
    try {
        const tasks = await repository.findTasks();
        res.success(tasks);
    } catch (err) {
        res.send(err);
    }
};

exports.detail = async (req, res) => {
    try {
        const details = await repository.findDetails(req.params.id);
        res.success(details);
    } catch (err) {
        res.send(err);
    }
};
