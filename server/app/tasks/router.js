require("./model");
const express = require("express");
const controller = require("./controller");

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
*    @apiParam {String} authorId  The task's author ID is required.
*    @apiParam {String} projectId  The task's project ID is not required.
*    @apiParam {Date} dueDate  The task's due date is required.
*    @apiExample {response} Example response:
*      {
*        "task": {
*          "id": "1",
*          "title": "Tech stuff",
*          "description": "This is the description of the task",
*          "projectId": "123",
*          "dueDate": 2018-09-01"
*        }
*      }
*/
router.post("/", controller.create);

/**
 *    @apiGroup Task
 *    @api {put} /:id Updating an existing task.
 *    @apiParam {String} title  The task's title can be changed.
 *    @apiParam {String} description  The task's description can be changed.
 *    @apiParam {String} projectId  The task's project ID can be changed.
 *    @apiParam {Date} dueDate  The task's due date can be changed.
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
router.get("/", controller.getAll);

/**
 *    @apiGroup Task
 *    @api {get} /user/:id Displaying the list of existing tasks for an user.
 */
router.get("/user/:id", controller.getByUserId);

/**
 *    @apiGroup Task
 *    @api {get} /project/:id Displaying the list of existing tasks for a project.
 */
router.get("/project/:id", controller.getByProjectId);

/**
 *    @apiGroup Task
 *    @api {get} /:id Displaying details of an existing task.
 */
router.get("/:id", controller.getById);

module.exports = router;
