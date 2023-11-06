const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReviewComment extends Model {}

ReviewComment.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    commentor: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'username',
      },
    },

    review_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'Review',
            key: 'review_id'
        }
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

module.exports = ReviewComment;
