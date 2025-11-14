// api/v1/saludo.js
module.exports = (req, res) => {
  const { nombre } = req.query;

  if (nombre) {
    res.status(200).json({
      mensaje: `Hola, ${nombre}!`,
    });
  } else {
    // RESPUESTA DE ERROR IMPLEMENTADA
    res.status(400).json({
      error:
        "Se requiere el parámetro 'nombre' en la URL (ej: /api/v1/saludo?nombre=Mundo)",
    });
  }
};
