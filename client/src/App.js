import './App.css';
/* import io from "socket.io-client"; */
// import React, {useState, useEffect} from 'react';
// import React, {useState} from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateGame from './pages/CreateGame';
import HomePage from './pages/Homepage';
import Join from './pages/Join';
import Lobby from './pages/Lobby';
import HostLobby from './pages/HostLobby';
import Game from './pages/Game';
import EndGame from './pages/EndGame';
import { Header, Footer } from './layout';

// const serverEndpoint = "http://127.0.0.1:5000";
// const socket = io.connect(serverEndpoint);


function App() {

  // const [socket, setSocket] = useState("");

  // const componentDidMount = () => {

  //   console.log(socket)
  //   setSocket({ socket });


  // }

  // const componentWillUnmount = () => {
  //     socket.disconnect();
  //     // socket.manager.onClientDisconnect(socket);
  //     console.log(socket)
  //     // useEffect(socket.disconnect(),[]);
  // };

  return (

    <>
    <div id="app">
            <main>
              <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/Join" element={<Join />}/>
                    <Route path="/Lobby" element={<Lobby />}/>
                    <Route path="/Host" element={<HostLobby />}/>
                    <Route path="/Create" element={<CreateGame />}/>
                    <Route path="/Game" element={<Game />}/>
                    <Route path="/End" element={<EndGame/>}/>
                </Routes>
                <Footer />
            </main>
        </div>
    </>
  );
};

export default App;
