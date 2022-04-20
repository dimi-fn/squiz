const express = require('express');
const router= express.Router();


/*********************************** game routes ***********************************/
const gameRoutes = require('../controllers/games');

// gets all games
router.get('/', gameRoutes.getAll); 

/*********************************** game routes ***********************************/

module.exports = router;


