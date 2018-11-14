require("./model");
const controller = require("./controller");

const express = require("express");

const router = express.Router();

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup Project
*    @api {project} / Creating new project.
*    @apiParam {String} title  The project's title is required.
*    @apiParam {String} description  The project's description is required.
*    @apiParam {String} authorId  The project's author ID is required.
*    @apiExample {response} Example response:
*       {
*         "project": {
*            "title": "Tech stuff",
*            "description": "This is the body of the project",
*            "authorId": "123"
*           }
*      }
*/
router.post("/", controller.create);

/**
*    @apiGroup Project
*    @api {put} /:id Updating an existing project.
*    @apiParam {String} title  The project's title can be changed.
*    @apiParam {String} description  The project's description can be changed.
*/
router.put("/:id", controller.update);

/**
*    @apiGroup Project
*    @api {delete} /:id Deleting an existing project.
*/
router.delete("/:id", controller.delete);

/**
*    @apiGroup Project
*    @api {get} / Displaying the list of existing projects.
*/
router.get("/", controller.getAll);

/**
*    @apiGroup Project
*    @api {get} /user/:id Displaying the list of existing projects for an user.
*/
router.get("/user/:id", controller.getByUserId);

/**
*    @apiGroup Project
*    @api {get} /:id Displaying details of an existing project.
*/
router.get("/:id", controller.getById);

module.exports = router;
