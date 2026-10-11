const { Router } = require("express");
const {
  CreateContactUsHandler,
  GetAllContactUs,
} = require("./ContactUs.service");

const router = Router();

router.post("/create", CreateContactUsHandler);
router.get("/getAllContactUs", GetAllContactUs);

module.exports = {
  ContactUsRouter: router,
};
