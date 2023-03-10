const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controller/CategoriesController");

const verifyJWT=require("../middleware/verifyJWT");
//categoryRouter.use(verifyJWT);

categoryRouter.route('/')
    .get(categoryController.getAll)
    .post(categoryController.create)

categoryRouter.route('/:id')
    .get(categoryController.getOne)
    .put(categoryController.update)
    .delete(categoryController.deleteOne)

module.exports = categoryRouter;