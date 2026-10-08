const { DataTypes } = require("sequelize");
const { sequelizeConfig } = require("../../config/sequelize.config");

const ServiceModel = sequelizeConfig.define(
  "service",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: false },
    tags: { type: DataTypes.JSON, allowNull: false },
    link: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    modelName: "service",
    tableName: "service",
  },
);
console.log("✅ ServiceModel loaded");

module.exports = {
  ServiceModel,
};
