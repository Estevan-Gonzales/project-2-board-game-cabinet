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
      console.log(req.session.username);
      console.log(req.body.reviewContent);
        const reviewData = await Review.create({
          game_id: req.body.game_id,
          poster: req.session.username,
          review_text: req.body.reviewContent
        });
        res.status(200).json(reviewData);
      } catch (err) {
        res.status(400).json(err);
      }
})

module.exports = router;
