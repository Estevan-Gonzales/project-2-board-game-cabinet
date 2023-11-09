const router = require('express').Router();
//const { gamePlaceholder, reviewPlaceholder} = require('../models');
const { Review, ReviewComment } = require('../../models');
const auth = require('../../utils/auth');

router.get('/:review_id', async (req, res) => {
    try {
      const repliesData = await ReviewComment.findAll({where: {review_id: req.params.review_id}});
      const replies = repliesData.map((reply) => reply.get({plain: true}));

      const review = await Review.findByPk(req.params.review_id);

      if(!repliesData) {
        res.status(404).json({message: 'Could not get Review Comments!'});
        return;
      }
      res.render('view-replies', {
            replies,
            poster: review.poster,
            game_name: review.game_name,
            review_text: review.review_text,
            loggedIn: req.session.loggedIn,
          });
    } catch (err) {
        res.status(500).json(err);
    }
  });


router.get('/:comment_id', async (req, res) => {
    try {
      const commentData = await ReviewComment.findByPk(req.params.comment_id);
      if(!commentData) {
        res.status(404).json({message: 'No comment found with this comment_id!'});
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

  router.post('/comment', auth, async (req, res) => {
    try {
        const commentData = await ReviewComment.create({
          commentor: req.body.commentor,
          review_id: req.body.review_id,
          comment_text: req.body.comment_text
        });
        res.status(200).json(commentData);
      } catch (err) {
        res.status(400).json(err);
      }
})

router.get('/reply', async (req, res) => {
  try {
      res.render('add-reply', {
          loggedIn: req.session.loggedIn,
        });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.get('/view', async (req, res) => {
  try {
      res.render('view-replies', {
          loggedIn: req.session.loggedIn,
        });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});


module.exports = router;
