// const express = require('express');
// const router = express.Router();

const Game = require('../models/game.js');

async function getAll(req, res) {
    try {
        const gamesData = await Game.allGames;
        console.log(gamesData);
        res.status(200).json({gamesData}); //added curly brackets
    } catch (err) {
        console.log(err)
        res.status(500).send(`Couldn't get all games, error: ${err}`);
    }
};

module.exports = { getAll };
