const express = require('express');
const router= express.Router();
router.use(express.json());

// router.use(express.json())

const gameController = require('../controllers/games.js');

router.get('/', gameController.getAll) // get info about all games

module.exports = router;


