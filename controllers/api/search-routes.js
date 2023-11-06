const router = require('express').Router();
//const { homePlaceholder, profilePlaceholder, gamePlaceholder} = require('../models');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('search-results', {
            loggedIn: req.session.loggedIn,
          });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/homePlaceholder/', auth, async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/profilePlaceholder/:username', auth, async (req, res) => {
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;
