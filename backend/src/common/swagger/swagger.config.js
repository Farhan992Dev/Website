const { config } = require("dotenv");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
config();

function swaggerConfig(app) {
  const swaggerDocument = swaggerJSDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "WebSite swagger",
        version: "1.0.0",
        description: "WebSite  swagger ui",
      },

      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    },
    apis: [process.cwd() + "/src/module/**/*swagger.js"],
  });
  const swagger = swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      withCredentials: true,
    },
  });
  app.use("/swagger", swaggerUi.serve, swagger);
}

module.exports = {
  swaggerConfig,
};
