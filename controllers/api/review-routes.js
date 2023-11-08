const router = require('express').Router();
const { Review, ReviewComment} = require('../../models');
const auth = require('../../utils/auth');

router.get('/:game_id', async (req, res) => {
    try {
        const reviewsData = await Review.findAll({where: {game_id: req.params.game_id}});
        const reviews = reviewsData.map((review) => review.get({plain: true}));

        res.render('review-page', {
            reviews,
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
          game_name: req.body.title,
          poster: req.session.username,
          review_text: req.body.reviewContent
        });
        res.status(200).json(reviewData);
      } catch (err) {
        res.status(400).json(err);
      }
})

module.exports = router;
