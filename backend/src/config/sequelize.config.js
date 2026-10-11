const { Sequelize } = require("sequelize");

const sequelizeConfig = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

sequelizeConfig
  .authenticate()
  .then(() => console.log("contected to db"))
  .catch((e) => console.log(e));

module.exports = {
  sequelizeConfig,
};
