import React from 'react';
import { useSelector } from 'react-redux';

const Lobby = () => {
    const user = useSelector(state => state.result);
    const renderUser = user.map((result)=><p>{result.UserName}</p>)

    return(
    <>
    <h1>Lobby</h1>
    <div id="userContainer">{renderUser}</div>
    </>
    )
}

export default Lobby;
