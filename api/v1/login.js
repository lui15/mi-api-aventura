// api/v1/login.js
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  const { username, password } = req.body; // Asumimos que el body de la petición tiene estos campos
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    return res.status(500).json({ error: "JWT_SECRET no configurada." });
  }

  // Lógica simple de verificación de credenciales (debería ser contra una DB)
  if (username === "admin" && password === "1234") {
    // Credenciales válidas: generar token
    const token = jwt.sign({ user: username, role: "admin" }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      mensaje: "Autenticación exitosa",
      token: token,
    });
  } else {
    // Credenciales inválidas
    return res.status(401).json({
      error: "Credenciales inválidas",
    });
  }
};
