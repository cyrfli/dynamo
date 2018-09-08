const utilities = require("../../utilities");
const repository = require("./repository");

exports.create = async(req, res) => {
    try {
        const { user } = req;
        const comment = await repository.createComment(user, req.body);
        res.success(utilities.extractObject(
        comment,
        [ "id", "content" ],
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
        const comments = await repository.findComments();
        res.success(comments);
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
