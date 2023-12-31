const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'games',
        key: 'game_id',
      },
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'username',
      },
    },
    review_text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;
