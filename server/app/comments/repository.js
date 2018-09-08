const mongoose = require("mongoose");

const Comment = mongoose.model("Comment");
const User = mongoose.model("User");

const createComment = async (user, data) => {
    const { id } = user;

    const comment = new Comment(data);
    comment.authorId = await User.findOne({ id });
    const query = await comment.save();
    return query;
};

const findComments = () => Comment.find();

const findDetails = (id) => Comment.findOne({ _id: id });

module.exports = {
    createComment,
    findComments,
    findDetails,
};
