const router = require('express').Router();
//const {  } = require('../../models');
const auth = require('../../utils/auth');

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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;
