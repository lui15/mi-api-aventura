// server.js
const express = require("express");
const app = express();

// Usar el puerto proporcionado por Heroku/Vercel o el 3000 por defecto (Ejercicio 11)
const PORT = process.env.PORT || 3000;

// Middleware básico para manejar las rutas de la API (simulación local)
// Esto es para probar localmente, en Vercel se usa la estructura 'api/...'
app.get("/api/v1/hola", (req, res) => {
  // Simulamos la respuesta de la función serverless hola.js
  res.status(200).json({
    mensaje: "¡Bienvenido a la versión 1 de nuestra API!",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express escuchando en http://localhost:${PORT}`);
  console.log(
    "Nota: En Vercel, las rutas de la API son manejadas por la estructura de directorios."
  );
});
