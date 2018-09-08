const utilities = require("../../utilities");
const repository = require("./repository");

exports.create = async(req, res) => {
    try {
        const { user } = req;
        const post = await repository.createPost(user, req.body);
        res.success(utilities.extractObject(
        post,
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
        const posts = await repository.findPosts();
        res.success(posts);
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
