const Games = require('./Games');
const OwnedGame = require('./OwnedGame');
const Review = require('./Review');
const User = require('./User');
const ReviewComment = require('./ReviewComment')


//--------------------------------
User.hasMany(OwnedGame, {
    foreignKey: 'username'
});
OwnedGame.belongsTo(User, {
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
OwnedGame.hasOne(Games, {
    foreignKey: 'game_id'
});
Games.belongsTo(OwnedGame, {
    foreignKey: 'game_id'
});
//--------------------------------
Games.hasMany(Review, {
    foreignKey: 'review_id',
});
Review.belongsTo(Games, {
    foreignKey: 'review_id'
});
//--------------------------------
Review.hasMany(ReviewComment, {
    foreignKey: 'comment_id'
});
ReviewComment.belongsTo(Review, {
    foreignKey: 'comment_id'
});
//--------------------------------
User.hasMany(ReviewComment, {
    foreignKey: 'comment_id'
});
ReviewComment.belongsTo(User, {
    foreignKey: 'comment_id'
})

module.exports = {Games, OwnedGame, Review, ReviewComment, User}