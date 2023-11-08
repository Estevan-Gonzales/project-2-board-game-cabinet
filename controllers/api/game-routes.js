const router = require('express').Router();
const { Games, OwnedGame } = require('../../models');
const auth = require('../../utils/auth');

router.get('/:game_id', async (req, res) => {
    try {
        const gameData = await Games.findByPk(req.params.game_id);
        console.log(gameData.names);
        res.render('game-page', {
            loggedIn: req.session.loggedIn,
            game_id: gameData.game_id,
            title: gameData.names,
            image_url: gameData.image_url,
            category: gameData.category,
            min_players: gameData.min_players,
            max_players: gameData.max_players,
            age: gameData.age,
            min_time: gameData.min_time,
            max_time: gameData.max_time,
            mechanic: gameData.mechanic
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
