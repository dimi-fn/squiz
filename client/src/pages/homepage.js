import React, { useState } from 'react';
import { Form, NavButton} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {getUserName} from "../actions"


function HomePage (){
    const [ UserName, setUserName ] = useState("")
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        console.log(UserName);
        dispatch(getUserName(UserName));
    }

    const updateInput = e => {
        const input = e.target.value;
        setUserName(input);
    }
    return(
        <>
        <h3>Squiz App</h3>
            <div id="nameForm">
            <Form handleSubmit={handleSubmit} updateInput={updateInput}/>
        </div>

        <div id="HomeButton">
            <NavButton path="/Create" value="Create Room"/>
            <NavButton path="/Join" value="Join Room"/>
        </div>
        </>
    )
}

export default HomePage;
