const express = require('express');
const router= express.Router();


/*********************************** game routes ***********************************/
const gameRoutes = require('../controllers/games');

// gets all games: localhost:3030/games
router.get('/', gameRoutes.getAll); 
// gets game by room id: localhost:3030/games/room/:id
router.get('/room/:id', gameRoutes.findByRoomId); 





// get game results based on game id
// router.get('/:id', gameRoutes.findById); 
// router.get('/:_id', gameRoutes.findById); 





// post game info for a new quiz
// router.post('/newGame', gameRoutes.postAll);

/*********************************** game routes ***********************************/

module.exports = router;


