const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pdf = require("pdf-parse");
const sequelize = require("./config/database"); // Conexión a la base de datos
const Factura = require("./models/facturas"); // Modelo Factura
const Producto = require("./models/productos"); // Modelo Producto

const app = express();
const PORT = 5432;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas (ejemplo simple)
app.get("/", (req, res) => {
  res.send("Servidor funcionando...");
});

// Sincronización de la base de datos y inicio del servidor
(async () => {
  try {
    // Sincronizar modelos con la base de datos
    await sequelize.sync({ force: false }); // Cambia "force: true" a "force: false" en producción.
    console.log("Base de datos sincronizada correctamente.");

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error al sincronizar la base de datos:", err);
  }
})();
