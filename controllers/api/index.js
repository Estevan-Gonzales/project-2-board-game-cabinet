const router = require('express').Router();

const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const searchRoutes = require('./search-routes');
const gameRoutes = require('./game-routes');
const reviewRoutes = require('./review-routes');
const replyRoutes = require('./review-comments-routes');

router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
router.use('/search', searchRoutes);
router.use('/game', gameRoutes);
router.use('/review', reviewRoutes);
router.use('/replies', replyRoutes);

module.exports = router;
