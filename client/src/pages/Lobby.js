import React from 'react';
import { useSelector } from 'react-redux';

const Lobby = () => {
    const user = useSelector(state => state.UserName);

    const renderUser = () => {user.map(e => <div>{e}</div>)}

    return(
    <>
    <h1>Lobby</h1>
    {
        
    }
    </>
    )
}

export default Lobby;
    <>
    <h1>Lobby</h1>
    {
        
    }
    </>
    )
}

export default Lobby;
