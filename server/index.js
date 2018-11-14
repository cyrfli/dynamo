const express = require("express");

const app = express();
const config = require("./config/config")
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");
const logger = require("./helpers/logger");

const userRouter = require("./app/users/router");
const projectsRouter = require("./app/projects/router");
const tasksRouter = require("./app/tasks/router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());

app.use("/users", userRouter);
app.use("/projects", projectsRouter);
app.use("/tasks", tasksRouter);

app.use(errorHandler);

app.listen(config.port, () => {
  logger.info(`Listening on port ${config.port}`);
});
