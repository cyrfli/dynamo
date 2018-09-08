const express = require("express");

const controller = require("./user.controller");

const router = express.Router();

// use apiDoc to generate documentation for API routes
// Details on how to use on: http://apidocjs.com/
// install apidoc globally: npm install apidoc -g
// Generate documentation: apidoc -i src/ -o apidoc/

/**
*    @apiGroup User
*    @api {post} /authenticate User login route.
*    @apiParam {String} username  User username required.
*    @apiParam {String} password  User password required.
*    @apiExample {response} Example response:
*       {
*         "user": {
*            "token": dahljkhajfhajku32974eq9kjh
*           }
*      }
*/
router.post("/authenticate", controller.authenticate)

/**
*    @apiGroup User
*    @api {post} /register Adding an user to the db.
*    @apiParam {String} name  Mandatory name.
*    @apiParam {Number} age  Mandatory age. Minimum 18.
*    @apiParam {String} gender  Mandatory gender.
*    @apiExample {response} Example response:
*       {
*         "user": {
*            "username": "user123"
*            "password": "pass123"
*            "email": "user123@mail.com",
*            "gender": "female",
*            "age": 30
*           }
*      }
*/
router.post("/register", controller.register);

/**
*    @apiGroup User
*    @api {put} /update Edit the profile and filtering options.
*    @apiDescription Useful to change profile information
*    @apiParam {String} _id  User ID required.
*    @apiParam {String} name  Mandatory name.
*    @apiParam {Number} age  Mandatory age. Minimum 18.
*    @apiParam {String} gender  Mandatory gender.
*/
router.put("/update", controller.update);

/**
*    @apiGroup User
*    @api {delete} /delete Delete an user.
*    @apiParam {String} _id  User ID required.
*    @apiHeaderExample Example header
*       {
*           _id:123456789
*       }
*/
router.delete("/delete", controller.delete);

/**
*    @apiGroup User
*    @api {get} / Displaying the list with existing users.
*/
router.get( "/", controller.getAll );

/**
*    @apiGroup User
*    @api {get} /:id Displaying details of an existing user.
*/
router.get( "/:id", controller.getById );

module.exports = router;
