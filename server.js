// server.js (Modificado para Swagger)
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Cargar el archivo de especificación de Swagger
const swaggerDocument = YAML.load(path.join(__dirname, "swagger.yaml"));

// Usar Swagger-UI en la ruta /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ... (resto del código de Express para probar rutas locales como app.get('/api/v1/hola', ...))

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
  console.log(
    `📖 Documentación de la API en http://localhost:${PORT}/api-docs`
  );
});
