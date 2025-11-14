// api/v1/authMiddleware.js (Crea este nuevo archivo)
const jwt = require("jsonwebtoken");

const authenticate = (handler) => async (req, res) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Acceso denegado. No se proporcionó Token." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Adjuntar info del usuario al request
    return handler(req, res); // Continuar con la función principal
  } catch (err) {
    return res.status(403).json({ error: "Token inválido o expirado." });
  }
};

module.exports = authenticate;
