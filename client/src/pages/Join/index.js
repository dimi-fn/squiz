import React, {useState} from 'react';
import { Form } from '../../components';
import { useNavigate } from 'react-router-dom';
import './style.css'

const Join = () => {
    const [ roomID, setRoomID ] = useState("")
    const navigateTo = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(roomID);
        navigateTo("/Lobby");
    }

    const updateInput = e => {
        const input = e.target.value;
        setRoomID(input);
    }

    const goTo = useNavigate();

    return(
    <>
    <h1 id="joinH1">
        Enter Room ID/PIN
    </h1>
    <Form handleSubmit={handleSubmit} updateInput={updateInput}/>
    <button id='backBtn' onClick={() => goTo(-1)} style={{cursor: 'pointer'}}>Go Back</button>
    </>
    
    )
}

export default Join;
