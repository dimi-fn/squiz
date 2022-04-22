import React from 'react';
import NavButton from '../../components/Button/NavButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css'

const HostLobby = () => {
    const user = useSelector(state => state.result);
    const roomID = useSelector(state => state.roomID);
    const renderUser = user.map((result)=><p>{result.UserName}</p>)
    const goTo = useNavigate();

    return(
    <div id="Hlobby">
    <h1 id="roomTitle">ROOM ID: {roomID}</h1>
    <div id="userContainer">{renderUser}</div>
    <NavButton path = "/Game" value = "Start Game"/>
    <button id='HbackBtn' onClick={() => goTo(-1)} style={{cursor: 'pointer'}}>Go Back</button>
    </div>
    )
}

export default HostLobby;
