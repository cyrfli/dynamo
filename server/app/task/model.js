const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: false },
    dueDate: { type: Date, default: Date.now}
}, {
    timestamps: true,
});

taskSchema.set("toJSON", { virtuals: true });

taskSchema.methods.toJSON = function() {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;

  return obj;
};

module.exports = mongoose.model("Task", taskSchema);
