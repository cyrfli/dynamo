const mongoose = require("mongoose");

const Like = mongoose.model("Like");
const User = mongoose.model("User");

const createLike = async (user, data) => {
    const { id } = user;

    const like = new Like(data);
    like.authorId = await User.findOne({ id });
    const query = await like.save();
    return query;
};

const findLikes = () => Like.find();

const findDetails = (id) => Like.findOne({ _id: id });

module.exports = {
    createLike,
    findLikes,
    findDetails,
};
