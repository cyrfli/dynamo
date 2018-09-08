const mongoose = require("mongoose");

const Post = mongoose.model("Post");
const User = mongoose.model("User");

const createPost = async (user, data) => {
    const { id } = user;

    const post = new Post(data);
    post.authorId = await User.findOne({ id });
    const query = await post.save();
    return query;
};

const findPosts = () => Post.find();

const findDetails = (id) => Post.findOne({ _id: id });

module.exports = {
    createPost,
    findPosts,
    findDetails,
};
