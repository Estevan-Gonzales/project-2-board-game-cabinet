const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model {}

Games.init(
  {
    game_rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bgg_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    names: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    min_players: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    max_players: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    avg_time: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    min_time: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    max_time: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    avg_rating: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    geek_rating: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    num_votes: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    mechanic: {
        type: DataTypes.STRING,
        allowNull: true
    },
    owned: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    designer: {
        type: DataTypes.STRING,
        allowNull: true
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'games'
  }
);

module.exports = Games;
