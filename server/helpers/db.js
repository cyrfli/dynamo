const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.connect(
  config.mongoUrl,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../app/users/model"),
  Project: require("../app/projects/model"),
  Task: require("../app/tasks/model")
};
