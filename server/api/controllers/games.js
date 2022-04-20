// const express = require('express');
// const router = express.Router();

const Game = require('../models/Game');

async function getAll(req, res) {
    try {
        const gamesData = await Game.getAll;
        res.status(200).json(gamesData);
    } catch (err) {
        console.log(err)
        res.status(500).send(`Couldn't get all games, error: ${err}`);
    }
};

module.exports = { getAll };
