const router = require('express').Router();
const { profilePlaceholder, gamePlaceholder, searchPlaceholder } = require('../models');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
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

router.get('/gamePlaceholder/:id', async (req, res) => {
  try {
      
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/searchPlaceholder/:input', async (req, res) => {
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
