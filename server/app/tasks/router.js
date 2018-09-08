require("./model");
const controller = require("./controller");

const express = require("express");

const router = express.Router();

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup Task
*    @api {task} / Creating new task.
*    @apiParam {String} title  The task's title is required.
*    @apiParam {String} description  The task's description is required.
*    @apiParam {String} projectId  The task's project ID is not required.
*    @apiParam {String} authorId  The task's author ID is required.
*    @apiExample {response} Example response:
*       {
*         "task": {
*            "title": "Tech stuff",
*            "description": "This is the description of the task",
*            "authorId": "123"
*           }
*      }
*/
router.post("/", controller.create);

/**
*    @apiGroup Task
*    @api {put} /:id Updating an existing task.
*    @apiParam {String} title  The task's title can be changed.
*    @apiParam {String} description  The task's description can be changed.
*/
router.put("/:id", controller.update);

/**
*    @apiGroup Task
*    @api {delete} /:id Deleting an existing task.
*/
router.delete("/:id", controller.delete);

/**
*    @apiGroup Task
*    @api {get} / Displaying the list with existing tasks.
*/
router.get("/", controller.list);

/**
*    @apiGroup Task
*    @api {get} /:id Displaying details of an existing task.
*/
router.get("/:id", controller.detail);

module.exports = router;
