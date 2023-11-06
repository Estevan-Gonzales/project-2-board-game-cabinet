const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class User extends Model {}

// create fields/columns for Location model
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
