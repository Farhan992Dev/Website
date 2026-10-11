const { DataTypes } = require("sequelize");
const { sequelizeConfig } = require("../../config/sequelize.config");

const ContactUsModel = sequelizeConfig.define(
  "contactUs",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nameFamily: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    service: { type: DataTypes.JSON, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    modelName: "contactUs",
    tableName: "contactUs",
  },
);

module.exports = {
  ContactUsModel,
};
