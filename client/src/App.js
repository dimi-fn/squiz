import './App.css';
import io from "socket.io-client";
// import React, {useState, useEffect} from 'react';
import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateGame from './pages/createGame';
import HomePage from './pages/homepage';
import Join from './pages/Join';
import Lobby from './pages/Lobby';
import HostLobby from './pages/HostLobby';

const serverEndpoint = "http://127.0.0.1:5000";
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
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/Join" element={<Join />}/>
                    <Route path="/Lobby" element={<Lobby />}/>
                    <Route path="/Host" element={<HostLobby />}/>
                    <Route path="/Create" element={<CreateGame />}/>
                </Routes>
            </main>
        </div>
    </>
  );
};

export default App;

