const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;

        return ret;
      }
    },
    toObject: { virtuals: true }
  }
);

projectSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "projectId"
});

projectSchema.pre("findOne", autoPopulateTasks);
projectSchema.pre("find", autoPopulateTasks);

function autoPopulateTasks(next) {
  this.populate("tasks");
  next();
}

module.exports = mongoose.model("Project", projectSchema);
