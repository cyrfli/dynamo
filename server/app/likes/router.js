require("./model");
const controller = require("./controller");

const express = require("express");

const router = express.Router();

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup Like
*    @api {like} / Creating new like.
*    @apiParam {String} content  The like's content is not required.
*    @apiParam {String} postId  The like's post ID is required if the like's comment ID is null.
*    @apiParam {String} commentId  The like's comment ID is required if the like's post ID is null.
*    @apiParam {String} authorId  The like's author ID is required.
*    @apiExample {response} Example response:
*       {
*         "like": {
*            "content": "Check out my new project guys!",
*            "postId": "20",
*            "authorId": "123"
*           }
*      }
*/
router.post("/", controller.create);

/**
*    @apiGroup Like
*    @api {put} /:id Updating an existing like.
*    @apiParam {String} content  The like's content can be changed.
*/
router.put("/:id", controller.update);

/**
*    @apiGroup Like
*    @api {delete} /:id Deleting an existing like.
*/
router.delete("/:id", controller.delete);

/**
*    @apiGroup Like
*    @api {get} / Displaying the list with existing likes.
*/
router.get("/", controller.list);

/**
*    @apiGroup Like
*    @api {get} /:id Displaying details of an existing like.
*/
router.get("/:id", controller.detail);

module.exports = router;
