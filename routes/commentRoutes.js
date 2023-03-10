const express = require("express");
const commentRouter = express.Router();
const commentController = require("../controller/CommentsController")


commentRouter.route('/')
    .post(commentController.create)


commentRouter.route('/:id')
    .get(commentController.getOne)
    .put(commentController.update)
    .delete(commentController.deleteOne)





module.exports = commentRouter;