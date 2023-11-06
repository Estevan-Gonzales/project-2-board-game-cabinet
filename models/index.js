const Game = require('./Game');
const OwnedGame = require('./OwnedGame');
const Review = require('./Review');
const User = require('./User');
const ReviewComment = require('./ReviewComment')

User.hasMany(OwnedGame, {
    foreignKey: 'username'
});

User.hasMany(Review, {
    foreignKey: 'username'
});

OwnedGame.hasOne(Game, {
    foreignKey: 'game_id'
});

Review.hasOne(User, {
    foreignKey: 'username'
});

Review.hasOne(Game, {
    foreignKey: 'game_id'
});

ReviewComment.belongsTo(Review, {
    foreignKey: 'review_id'
})


module.exports = {Game, OwnedGame, Review, ReviewComment, User}