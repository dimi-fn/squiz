// const express = require('express');
// const router = express.Router();

// const bodyParser = require ('body-parser');

const Game = require('../models/Game');

// get all games from the collection
async function getAll(req, res) {
    try {
        const gamesData = await Game.getAll;
        res.status(200).json(gamesData);
    } catch (err) {
        console.log(err)
        res.status(500).send(`Couldn't get all games, error: ${err}`);
    }
};

// find by room id
async function findByRoomId(req, res) {
    try{
        const id= req.params.id;
        // const {id}= req.params;
        const results = await Game.findByRoomId(id);
        res.status(200).json(results);        
    } catch (err) {
        res.status(500).send(`Error getting room results, error: ${err}`)
    }
}
//         const game = await Game.findById(req.params.id);
//         res.status(200).json(game);
//     } catch (err) {
//         res.status(404).send(`Couldn't find game, error: ${err}`)
//     }
// }

// find by game id (currently not used)
async function findById(req, res) {
    try{
        const id= req.params._id;
        const game = await Game.findById(id)
        // const game = await Game.findById(req.params.id);
        res.status(200).json(game);
    } catch (err) {
        res.status(404).send(`Couldn't find game, error: ${err}`)
        }
    }

async function insertGame(req, res) {
    try {   
        const newRoomData = await Game.insertGame(  
            req.body.roomID,
            req.body.questions,
            req.body.category,
            req.body.difficulty,
            req.body.result
        );
        res.status(201).json(newRoomData);
    } catch (err) {
        res.status(500).json(`Could not insert room data, error: ${err}`)
    };
}



module.exports = { getAll, findByRoomId, findById, insertGame};
// createGame 
