const mongoose = require("mongoose");
const config = require("../config/config");

mongoose.connect(
  config.mongoUrl,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../app/user/user.model"),
  Project: require("../app/project/project.model")
};
