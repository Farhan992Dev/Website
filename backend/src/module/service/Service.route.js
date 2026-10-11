const { Router } = require("express");

const { CreateServiceHandler, GetAllService } = require("./Service.service");
const { uploadFile } = require("../../config/multer");

const router = Router();

router.post("/create", uploadFile.single("image"), CreateServiceHandler);
router.get("/getAllService", GetAllService);

module.exports = {
  ServicetRouter: router,
};
