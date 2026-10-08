const createHttpError = require("http-errors");
const { ErrorMessage } = require("../../common/message/message");
const { ContactUsModel } = require("./ContactUs.model");

async function GetAllContactUs(req, res, next) {
  try {
    const request = await ContactUsModel.findAll({});
    if (!request) throw createHttpError(400, "درخواست یافت نشد");
    return res.json({
      data: request,
    });
  } catch (error) {
    next(error);
  }
}

async function CreateContactUsHandler(req, res, next) {
  try {
    const { nameFamily, phoneNumber, email, description, service } = req.body;

    await ContactUsModel.create({
      nameFamily,
      phoneNumber,
      email,
      description,
      service,
    });

    return res.json({
      status: 200,
      message: " درخواست شما  با موفقیت ثبت شد.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  GetAllContactUs,
  CreateContactUsHandler,
};
