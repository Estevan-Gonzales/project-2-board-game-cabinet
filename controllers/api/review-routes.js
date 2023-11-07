const router = require('express').Router();
const { Game, Review, ReviewComment} = require('../../models');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('review-page', {
            loggedIn: req.session.loggedIn,
          });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const reviewData = await Review.create({
          game_id: req.body.game_id,
          poster: req.body.poster
        });
        res.status(200).json(reviewData);
      } catch (err) {
        res.status(400).json(err);
      }
})

router.post('/comment', auth, async (req, res) => {
    try {
        const commentData = await ReviewComment.create({
          commentor: req.body.commentor,
          review_id: req.body.review_id
        });
        res.status(200).json(commentData);
      } catch (err) {
        res.status(400).json(err);
      }
})


module.exports = router;
