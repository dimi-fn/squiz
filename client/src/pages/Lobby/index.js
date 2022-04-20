import React from 'react';
import { useSelector } from 'react-redux';

const Lobby = () => {
    const user = useSelector(state => state.UserName);
    const renderUser = user.map((name)=><p>{name}</p>)

    return(
    <>
    <h1>Lobby</h1>
    <div id="userContainer">{renderUser}</div>
    </>
    )
}

export default Lobby;
