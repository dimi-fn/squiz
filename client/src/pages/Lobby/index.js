import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'

const Lobby = () => {
    const user = useSelector(state => state.result);
    const renderUser = user.map((result)=><p>{result.UserName}</p>)
    const roomID = useSelector(state => state.roomID);

    return(
    <>
    <h1 id="roomTitle">ROOM ID: {roomID}</h1>
    <div id="userContainer">{renderUser}</div>
    </>
    )
}

export default Lobby;
