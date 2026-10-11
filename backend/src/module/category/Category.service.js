const createHttpError = require("http-errors");
const { ServiceModel, CategoryModel } = require("./Category.model");
const { ErrorMessage } = require("../../common/message/message");

async function GetAllCategory(req, res, next) {
  try {
    const category = await CategoryModel.findAll({});

    return res.json({
      category,
    });
  } catch (error) {
    next(error);
  }
}

async function CreateCategoryHandler(req, res, next) {
  try {
    const { title } = req.body;

    const titleCategory = await CategoryModel.findOne({ where: { title } });

    if (titleCategory)
      throw createHttpError(400, ErrorMessage.Has_Already_exists);

    await CategoryModel.create({
      title,
    });

    return res.json({
      status: 200,
      message: " دسته بندی با موفقیت افزوده شد.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  GetAllCategory,
  CreateCategoryHandler,
};
