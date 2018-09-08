require("./model");
const controller = require("./controller");

const express = require("express");

const router = express.Router();

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup Comment
*    @api {comment} / Creating new comment.
*    @apiParam {String} content  The comment's content is not required.
*    @apiParam {String} postId  The comment's post ID is required.
*    @apiParam {String} authorId  The comment's author ID is required.
*    @apiExample {response} Example response:
*       {
*         "comment": {
*            "content": "I like your new project!",
*            "postId": "11",
*            "authorId": "123"
*           }
*      }
*/
router.post("/", controller.create);

/**
*    @apiGroup Comment
*    @api {put} /:id Updating an existing comment.
*    @apiParam {String} content  The comment's content can be changed.
*/
router.put("/:id", controller.update);

/**
*    @apiGroup Comment
*    @api {delete} /:id Deleting an existing comment.
*/
router.delete("/:id", controller.delete);

/**
*    @apiGroup Comment
*    @api {get} / Displaying the list with existing comments.
*/
router.get("/", controller.list);

/**
*    @apiGroup Comment
*    @api {get} /:id Displaying details of an existing comment.
*/
router.get("/:id", controller.detail);

module.exports = router;
