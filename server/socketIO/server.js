const app = require("express")();
/* const app= require('../api'); */
const server = require("http").createServer(app);
const io = require("socket.io")(server) // integrate our http server with a new instance of socket.io

// socket connection will go here

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Express for SocketIO is running on port ${port}`))

// server.get('/', (req, res) => res.send('Hello from Squiz with SocketIO!!!'))


io.on('connection', socket => {
    console.log("'Ello, who's this we got here?") // runs when client first connects

    socket.on("disconnect", socket => { // runs when client disconnects
        console.log("K bye then");
    });
});


// server.listen(port, () => {
//     console.log(`Open for play on port ${port} by SocketIO!`)
// });
