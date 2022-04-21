// const express = require('express');
// const router = express.Router();

// const bodyParser = require ('body-parser');

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

// async function createGame(req, res){
//     try{

//         const {roomId, questions, category, difficulty, result} = req.params;
//         const newGame = await Game.setGame(roomId, questions, category, difficulty, result)
//         // req.status(201).json(newGame);
//         res.status(200).json(newGame)
//     } catch (err){
//         res.status(422).json(`Game could not be created, error: ${err}`)
//     }
// };

module.exports = { getAll, findByRoomId, findById};
// createGame 
