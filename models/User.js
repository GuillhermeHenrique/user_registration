const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
  },
  newletter: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = User;
