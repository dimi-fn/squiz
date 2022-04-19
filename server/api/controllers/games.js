const {Game} = require('../models/game');

async function getAll(req, res) {
    try {
        const gamesData = await Game.allGames();
        res.status(200).json(gamesData);
    } catch (err) {
        res.status(500).send(`Couldn't get all games, error: ${err}`);
    }
};

module.exports = { getAll };
