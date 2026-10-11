const createHttpError = require("http-errors");
const { ServiceModel } = require("./Service.model");
const { ErrorMessage } = require("../../common/message/message");
const { CategoryModel } = require("../category/Category.model");

async function GetAllService(req, res, next) {
  try {
    const service = await ServiceModel.findAll({
      include: [
        {
          model: CategoryModel,
          attributes: { exclude: ["id"] },
        },
      ],
    });

    const data = service.map((item) => ({
      ...item.toJSON(),
      tags: item.tags ? item.tags.split(",").map((tag) => tag.trim()) : [],
    }));

    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
}

async function CreateServiceHandler(req, res, next) {
  try {
    const { title, description, tags, type, link, categoryId } = req.body;
    let image = null;

    const titleCategory = await ServiceModel.findOne({ where: { title } });

    if (titleCategory)
      throw createHttpError(400, ErrorMessage.Has_Already_exists);

    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    await ServiceModel.create({
      title,
      description,
      tags,
      type,
      link,
      image,
      categoryId,
    });

    return res.json({
      status: 200,
      message: " سرویس با موفقیت افزوده شد.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  GetAllService,
  CreateServiceHandler,
};
