const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    content: { type: String, required: false },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: function() { return this.taskId? false : true } },
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: function() { return this.projectId? false : true } }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Post", postSchema);
