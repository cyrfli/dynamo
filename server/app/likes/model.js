const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likeSchema = new Schema({
    content: { type: String, required: false },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: function() { return this.commentId? false : true } },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment", required: function() { return this.postId? false : true } }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Like", likeSchema);
