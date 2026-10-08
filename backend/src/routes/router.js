const { Router } = require("express");

const { ServicetRouter } = require("../module/service/Service.route");
const { ContactUsRouter } = require("../module/contactUs/ContactUs.route");
const { CategoryRouter } = require("../module/category/Category.route");

const mainRouter = Router();

mainRouter.use("/service", ServicetRouter);
mainRouter.use("/contactUs", ContactUsRouter);
mainRouter.use("/category", CategoryRouter);

module.exports = {
  mainRouter,
};
