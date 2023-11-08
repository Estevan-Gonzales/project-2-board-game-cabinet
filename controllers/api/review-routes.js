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
          owned_id: req.body.owned_id,
          poster: req.body.poster,
          review_text: req.body.review_text
        });
        res.status(200).json(reviewData);
      } catch (err) {
        res.status(400).json(err);
      }
})

module.exports = router;
