const router = require('express').Router();
const { OwnedGame } = require('../../models');
const auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('game-page', {
            loggedIn: req.session.loggedIn,
          });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/claim/', auth, async (req, res) => {
    try {
        if(await OwnedGame.findOne({where: {game_id: req.body.game_id, username: req.body.username}})) {
            res.status(400).json({message: 'you already own this game!'});
        }
        else{
            const claimData = await OwnedGame.create({
                game_id: req.body.game_id,
                title: req.body.names,
                username: req.body.username
            });
            res.status(200).json(claimData);
        }
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
