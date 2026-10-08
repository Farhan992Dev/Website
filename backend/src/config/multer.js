const multer = require("multer");
const createHttpError = require("http-errors");

const storage = multer.memoryStorage();

const _3MB = 3 * 1000 * 1000;

const uploadFile = multer({
  storage,
  limits: {
    fileSize: _3MB,
  },

  fileFilter: (req, file, cb) => {
    const whiteList = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "application/pdf",
    ];

    if (whiteList.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(createHttpError(400, "فقط فایل‌های png، jpg، jpeg و pdf مجاز هستند."));
    }
  },
});

module.exports = {
  uploadFile,
};
