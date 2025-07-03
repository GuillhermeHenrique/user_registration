const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const Address = db.define("Address", {
  street: {
    type: DataTypes.STRING,
    require: true,
  },
  number: {
    type: DataTypes.STRING,
    require: true,
  },
  city: {
    type: DataTypes.STRING,
    require: true,
  },
});

// Usuário tem muitos endereços, e endereço tem apenas um único usuário
User.hasMany(Address);
Address.belongsTo(User);

module.exports = Address;
