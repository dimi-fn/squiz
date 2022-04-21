import React from 'react';
import NavButton from '../../components/Button/NavButton';
import { useSelector } from 'react-redux';
import './style.css'

const HostLobby = () => {
    const user = useSelector(state => state.result);
    const roomID = useSelector(state => state.roomID);
    const renderUser = user.map((result)=><p>{result.UserName}</p>)

    return(
    <>
    <h1>Lobby</h1>
    <p>roomID: {roomID}</p>
    <div id="userContainer">{renderUser}</div>
    <NavButton path = "/Game" value = "Start Game"/>
    
    </>
    )
}

export default HostLobby;
