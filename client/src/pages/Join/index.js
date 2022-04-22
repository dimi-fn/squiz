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

   
    return(
    <>
    <Form handleSubmit={handleSubmit} updateInput={updateInput}/>
    </>
    
    )
}

export default Join;
