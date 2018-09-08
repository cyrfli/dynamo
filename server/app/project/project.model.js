const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true,
});

projectSchema.set('toJSON', { virtuals: true });

projectSchema.methods.toJSON = function() {
    const obj = this.toObject();
    delete obj.__v;
    return obj;
  };

module.exports = mongoose.model("Project", projectSchema);
