const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { config } = require("dotenv");
const path = require("path");

const {
  errorHandler,
  notFoundPage,
} = require("./src/errorHandling/errorhandling");

const { swaggerConfig } = require("./src/common/swagger/swagger.config");
const { mainRouter } = require("./src/routes/router");
const { initialDataBase } = require("./src/config/model.initial");

config();

async function main() {
  try {
    const app = express();

    app.use(
      cors({
        origin: true,
        credentials: true,
      }),
    );

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    await initialDataBase();

    app.use("/uploads", express.static(path.join(__dirname, "upload")));

    app.use(mainRouter);

    swaggerConfig(app);

    notFoundPage(app);
    errorHandler(app);

    const port = process.env.PORT || 3000;

    app.listen(port, "0.0.0.0", () => {
      console.log(`✅ http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Database error:", error);
  }
}

main();
