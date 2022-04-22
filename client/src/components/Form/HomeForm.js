import React from 'react';
import './style.css'

function HomeForm({handleSubmit, updateInput, Create, Join}) {
    return (
        <form id="homeForm" onSubmit={handleSubmit}>
            <label htmlFor="username" id="usernameLabel">ENTER USERNAME</label>
            <input type="text" required id="username" onChange={updateInput}/>

            <input type="submit" id="createRoom" value="Create Room" style={{cursor: 'pointer'}} onClick={Create}/>
            <input type="submit" id="joinRoom" value="Join Room" style={{cursor: 'pointer'}} onClick={Join}/>
        </form>
    );
};

export default HomeForm;

