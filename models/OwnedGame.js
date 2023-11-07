const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OwnedGame extends Model {}

OwnedGame.init(
  {
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'games',
        key: 'game_id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'username',
      },
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ownedgame'
  }
);

module.exports = OwnedGame;
