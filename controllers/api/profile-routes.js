const router = require('express').Router();
const { Game, Review } = require('../../models');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('profile', {
            loggedIn: req.session.loggedIn,
          });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/review/:id', auth, async (req, res) => {
    try {
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/game/:id', auth, async (req, res) => {
    try {
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
