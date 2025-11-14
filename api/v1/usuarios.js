// api/v1/usuarios.js (Actualizado)

const mongoose = require("mongoose");
const authenticate = require("./authMiddleware"); // Importar el nuevo middleware

// ... (todo el código de conexión a DB y modelos del Ejercicio 14) ...
// ... (omito para brevedad) ...

// Lógica del endpoint envuelta en el middleware de autenticación
const usuariosHandler = async (req, res) => {
  // ... (el mismo código de conexión, inserción de prueba y consulta de usuarios del Ejercicio 14) ...
  // ... (reemplazar la línea de exportación del Ejercicio 14 con la siguiente) ...
  if (!MONGODB_URI) {
    return res
      .status(500)
      .json({
        error: "MONGODB_URI no está configurada en variables de entorno.",
      });
  }

  try {
    await connectToDatabase();

    // Obtener la lista de usuarios
    const usuarios = await Usuario.find({});

    res.status(200).json({
      mensaje:
        "Lista de usuarios obtenida de MongoDB Atlas. Acceso autorizado.",
      usuarios: usuarios,
    });
  } catch (error) {
    console.error("Error al conectar o consultar DB:", error);
    res
      .status(500)
      .json({
        error: "Error interno del servidor al acceder a la base de datos.",
      });
  }
};

module.exports = authenticate(usuariosHandler); // Exportar la función envuelta
