const Game = require('./Game');
const OwnedGame = require('./OwnedGame');
const Review = require('./Review');
const User = require('./User');
const ReviewComment = require('./ReviewComment')


//--------------------------------
User.hasMany(OwnedGame, {
    foreignKey: 'username'
});
OwnedGame.belongsto(User, {
    foreignKey: 'username'
});
//--------------------------------
User.hasMany(Review, {
    foreignKey: 'review_id'
});
Review.belongsTo(User, {
    foreignKey: 'review_id'
});
//--------------------------------
OwnedGame.hasOne(Game, {
    foreignKey: 'game_id'
});
Game.belongsTo(OwnedGame, {
    foreignKey: 'game_id'
});
//--------------------------------
Game.hasMany(Review, {
    foreignKey: 'review_id',
});
Review.belongsTo(Game, {
    foreignKey: 'review_id'
});
//--------------------------------
Review.hasMany(ReviewComment, {
    foreignKey: 'comment_id'
});
ReviewComment.belongsTo(Review, {
    foreignKey: 'comment_id'
});


module.exports = {Game, OwnedGame, Review, ReviewComment, User}