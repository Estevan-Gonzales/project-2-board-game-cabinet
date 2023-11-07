const router = require('express').Router();
//const { gamePlaceholder, reviewPlaceholder} = require('../models');
const { ReviewComment } = require('../../models');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const commentData = await ReviewComment.findAll();
      if(!commentData) {
        res.status(404).json({message: 'Could not get Review Comments!'});
        return;
      }
      res.status(200).json(commentData);
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


module.exports = router;
