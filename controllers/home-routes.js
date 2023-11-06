const router = require('express').Router();
const sequelize = require('../config/connection');
const { Games } = require('../models');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
   //limit top 5
   //render just the top 5 
   res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/users/:username', auth, async (req, res) => {
  try {
      
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/game/:game_id', async (req, res) => {
  try {
    const gameData = await Games.findByPk(req.params.game_id);
    res.status(200).json(gameData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/search/:input', async (req, res) => {
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
