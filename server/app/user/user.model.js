const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true
    },
    hash: { type: String, required: true },
    age: { type: Number, required: true, min: 18 },
    gender: { type: String, required: true, enum: ["male", "female"] }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(uniqueValidator, { message: "is already taken." });

userSchema.set("toJSON", { virtuals: true });

userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.__v;
  delete obj.hash;

  return obj;
};

/* userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret.local.password;
        return ret;
    }
}); */

module.exports = mongoose.model("User", userSchema);
