import './App.css';
import io from "socket.io-client";
import React, {useState} from 'react';
const serverEndpoint = "http://127.0.0.1:5000";

function App() {

  const [socket, setSocket] = useState("");

  const componentDidMount = () => {
    const socket = io(serverEndpoint);
    console.log(socket)
    setSocket({ socket });
  }
    
  const componentWillUnmount = () => {    
      socket.disconnect();
  };

  return (
      
    <>
    <h1>Squiz team</h1>
    componentDidMount
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

