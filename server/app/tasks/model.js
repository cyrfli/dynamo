const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: false },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Task", taskSchema);
