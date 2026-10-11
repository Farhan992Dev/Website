const { Router } = require("express");

const { CreateCategoryHandler, GetAllCategory } = require("./Category.service");

const router = Router();

router.post("/create", CreateCategoryHandler);
router.get("/getAll", GetAllCategory);

module.exports = {
  CategoryRouter: router,
};
