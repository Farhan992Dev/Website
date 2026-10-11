const { DataTypes } = require("sequelize");
const { sequelizeConfig } = require("../../config/sequelize.config");

const CategoryModel = sequelizeConfig.define(
  "Category",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    modelName: "Category",
    tableName: "Category",
  },
);

module.exports = {
  CategoryModel,
};
