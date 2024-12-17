const { Sequelize } = require("sequelize");

// Conexión a PostgreSQL
const sequelize = new Sequelize("facturasdb", "postgres", "familia123", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Opcional: evita mostrar logs en la consola.
});

sequelize
  .authenticate()
  .then(() => console.log("Conexión con PostgreSQL exitosa."))
  .catch((err) => console.error("Error al conectar con PostgreSQL:", err));

module.exports = sequelize;
