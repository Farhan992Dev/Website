const { ErrorMessage } = require("../common/message/message");

function notFoundPage(app) {
  app.use((req, res, next) => {
    return res.status(404).json({
      message: ErrorMessage.NotFound,
    });
  });
}

function errorHandler(app) {
  app.use((err, req, res, next) => {
    console.log(err);

    let status = err?.status ?? 500;
    let message = err?.message ?? "internal server error";

    if (err?.name == "validation error") {
      const { detail } = err;
      message = detail?.body[0].message ?? "internal server error";
    }

    return res.status(status).json({ message });
  });
}

module.exports = {
  notFoundPage,
  errorHandler,
};
