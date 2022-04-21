// setup requires
const express = require('express');
const cors = require('cors');
const server = express();

// setup uses
server.use(cors());
server.use(express.json());

// const bodyParser = require ('body-parser');
// server.use(bodyParser.json());

/* setup routes for games*/
const gameRoutes = require('./routes/games');
server.use('/games', gameRoutes);
/* setup routes for games*/

// send message on post 3030 upon successfull server running
server.get('/', (req, res) => res.send('Hello from the Squiz Server!'))

module.exports = server;
