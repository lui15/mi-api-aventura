// api/v1/hola.js
module.exports = (req, res) => {
  res.status(200).json({
    // MENSAJE ACTUALIZADO
    mensaje: "¡API actualizada y mejorada!",
  });
};
