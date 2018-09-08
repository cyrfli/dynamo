require("./model");
const controller = require("./controller");

const express = require("express");

const router = express.Router();

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup Post
*    @api {post} / Creating new post.
*    @apiParam {String} content  The post's content is not required.
*    @apiParam {String} projectId  The post's project ID is required if the post's task ID is null.
*    @apiParam {String} taskId  The post's task ID is required if the post's project ID is null.
*    @apiParam {String} authorId  The post's author ID is required.
*    @apiExample {response} Example response:
*       {
*         "post": {
*            "content": "Check out my new project guys!",
*            "projectId": "11",
*            "authorId": "123"
*           }
*      }
*/
router.post("/", controller.create);

/**
*    @apiGroup Post
*    @api {put} /:id Updating an existing post.
*    @apiParam {String} content  The post's content can be changed.
*/
router.put("/:id", controller.update);

/**
*    @apiGroup Post
*    @api {delete} /:id Deleting an existing post.
*/
router.delete("/:id", controller.delete);

/**
*    @apiGroup Post
*    @api {get} / Displaying the list with existing posts.
*/
router.get("/", controller.list);

/**
*    @apiGroup Post
*    @api {get} /:id Displaying details of an existing post.
*/
router.get("/:id", controller.detail);

module.exports = router;
