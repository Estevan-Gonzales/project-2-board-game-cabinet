const router = require('express').Router();
//const { gamePlaceholder, reviewPlaceholder} = require('../models');
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

router.get('/reviewPlaceholder/:id', auth, async (req, res) => {
    try {
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/gamePlaceholder/:id', auth, async (req, res) => {
    try {
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
