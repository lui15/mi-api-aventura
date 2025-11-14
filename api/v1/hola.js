// api/v1/hola.js
module.exports = (req, res) => {
  // Usar la variable de entorno
  const mensaje =
    process.env.MENSAJE_BIENVENIDA ||
    "Mensaje predeterminado (error en variable de entorno)";

  res.status(200).json({
    mensaje: mensaje,
  });
};
