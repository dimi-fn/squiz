import './App.css';
import io from "socket.io-client";
// import React, {useState, useEffect} from 'react';
import React, {useState} from 'react';
const serverEndpoint = "http://127.0.0.1:5000";
const socket = io.connect(serverEndpoint);



function App() {

  const [socket, setSocket] = useState("");

  const componentDidMount = () => {
    
    console.log(socket)
    setSocket({ socket });

    
  }
    
  // const componentWillUnmount = () => {    
  //     socket.disconnect();
  //     // socket.manager.onClientDisconnect(socket);
  //     console.log(socket)
  //     // useEffect(socket.disconnect(),[]);      
  // };

  return (
      
    <>
    <h1>Squiz team </h1>
    {/* {componentDidMount()} */}
    {/* {componentWillUnmount()} */}
    
    
    </>
  );
};


// function App() {
//   return (
//    <>
//     <h1>Squiz team</h1>
//    </>

//   );
// }

export default App;

