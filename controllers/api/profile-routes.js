const router = require('express').Router();
const { Games, Review, OwnedGame} = require('../../models');
const auth = require('../../utils/auth');

router.get('/', auth, async (req, res) => {
    try {
        console.log(req.session.username, 'here it is');
        const dbGameData = await OwnedGame.findAll({
            include: [{
                model: Games
            }],
            where: {
                username: req.session.username
            }
        });
      
          const games = dbGameData.map((game) =>
            game.get({plain: true}));

        console.log(games, 'berry');

        res.render('profile', {
            games,
            loggedIn: req.session.loggedIn
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
