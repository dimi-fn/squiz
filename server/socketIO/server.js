/* const app = require("express")(); */
const express = require("express");
const app = express();
const http = require("http");

const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

app.get('/', (req, res)=> res.send('Hello from the SocketIO server!'));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

// const app= require('../api'); 
// const server = require("http").createServer(app);
// const cors = require("cors");

// const io = require("socket.io")(server, {    
//     cors: {origin: "https://localhost:3000",
//      methods:["GET","POST"],}}
//     ) // integrate our http server with a new instance of socket.io

// app.use(cors());


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Express for SocketIO server is running on port ${port}!`))

io.on('connection', (socket) => {
    console.log("'Ello, who's this we got here?") // runs when client first connects
    console.log(`${socket}`);
    console.log(`${socket.id}`);

    // socket.on("disconnect", (socket) => { // runs when client disconnects
    //     console.log("K bye then");
    // });
});



