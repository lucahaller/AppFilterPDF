const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Factura = require("./facturas");

const Producto = sequelize.define("Producto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_producto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  unidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

// Relación: Producto pertenece a una factura.
Producto.belongsTo(Factura, {
  foreignKey: "factura_id",
  onDelete: "CASCADE", // Si se elimina una factura, también elimina sus productos.
});

module.exports = Producto;
