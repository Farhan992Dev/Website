const { CategoryModel } = require("../module/category/Category.model");
const { ServiceModel } = require("../module/service/Service.model");
const { sequelizeConfig } = require("./sequelize.config");

async function initialDataBase() {
  CategoryModel.hasMany(ServiceModel, {
    foreignKey: "categoryId",
    sourceKey: "id",
  });

  ServiceModel.belongsTo(CategoryModel, {
    foreignKey: "categoryId",
    targetKey: "id",
  });

  await sequelizeConfig.sync();
}

module.exports = {
  initialDataBase,
};
