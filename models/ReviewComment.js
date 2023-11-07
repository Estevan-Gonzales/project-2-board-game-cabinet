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
        model: 'user',
        key: 'username',
      },
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'review',
        key: 'review_id'
      }
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviewcomment'
  }
);

module.exports = ReviewComment;
