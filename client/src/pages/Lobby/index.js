import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
    const user = useSelector(state => state.result);
    const renderUser = user.map((result)=><p>{result.UserName}</p>)
    const roomID = useSelector(state => state.roomID);
    const goTo = useNavigate();

    return(
    <div id="jLobby">
    <h1 id="roomTitle">ROOM ID: {roomID}</h1>
    <div id="userContainer">{renderUser}</div>
    <button id='JbackBtn' onClick={() => goTo(-1)} style={{cursor: 'pointer'}}>Go Back</button>
    </div>
    )
}

export default Lobby;
