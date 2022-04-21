import React, { useState } from 'react';
import { HomeForm} from '../../components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {sendRoomID, sendUserName} from "../../actions"
import { End } from '../../actions';
import { Footer, Header } from '../../layout'
import './style.css'

function HomePage (){
    const [ UserName, setUserName ] = useState("")
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    let button = 0;
    let roomID = 2;
    dispatch(End());

    const Create = () => {
        button = 1;
    }

    const Join = () => {
        button = 2;
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(sendUserName(UserName));
        console.log(UserName)
        if(button === 1){
            navigateTo('/Create');
            dispatch(sendRoomID(roomID));
        }else if(button === 2){
            navigateTo('/Join');
        }
    }

    const updateInput = e => {
        const input = e.target.value;
        setUserName(input);
    }
    return(
        <>
            <Header />
            <div id="nameForm">
            <HomeForm handleSubmit={handleSubmit} updateInput={updateInput} Create={Create} Join={Join}/>
            <Footer />
        </div>
        </>
    )
}

export default HomePage;
