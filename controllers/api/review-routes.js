const router = require('express').Router();
//const { gamePlaceholder, reviewPlaceholder} = require('../models');
const { Review } = require('../../models');
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


router.get('/:review_id', async (req, res) => {
    try {
      const reviewData = await Review.findByPk(req.params.review_id);
      if(!reviewData) {
        res.status(404).json({message: 'No review found with this review_id!'});
        return;
      }
      res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
    }
  });



module.exports = router;
