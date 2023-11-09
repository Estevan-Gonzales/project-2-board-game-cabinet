const router = require('express').Router();
const sequelize = require('../config/connection');
const { Games, OwnedGame } = require('../models');
const auth = require('../utils/auth');

router.get('/', auth, async (req, res) => {
  try {

    const dbGameData = await Games.findAll({limit: 5});

    const games = dbGameData.map((game) =>
      game.get({plain: true}));

    console.log(games);

   //limit top 5
   //render just the top 5 
   res.render('homepage', {
      games,
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

    const dbGameData = await Games.findByPk(req.params.game_id);

    const games = dbGameData.map((game) =>
      game.get({plain: true}));

    console.log(games);

   //limit top 5
   //render just the top 5 
   res.render('game-page', {
      games,
      loggedIn: req.session.loggedIn,

    });
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
    res.redirect('/api/profile/');
    return;
  }

  res.render('login');
});

module.exports = router;
