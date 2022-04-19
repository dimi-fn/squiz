const express = require('express');
const server = express();

const gameRoute = require('./routes/index.js');

const cors = require('cors');
server.use(cors());

server.use('/games', gameRoute);

/* server.use(express.json()); */

server.get('/', (req, res) => res.send('Hello from Squiz!!!'))

module.exports = server;
