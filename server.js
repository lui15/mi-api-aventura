// Ejemplo de configuración de ruta en Express
const express = require("express");
const app = express();
const PORT = 3000; // O el puerto que estés usando

// Define la ruta principal (root)
app.get("/", (req, res) => {
  // Puedes enviar un mensaje de texto, un HTML o un JSON
  res.send("¡Bienvenido a mi API aventura! El servidor está funcionando.");
  // o
  // res.json({ message: 'API funcionando correctamente' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
