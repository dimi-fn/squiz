import React, { useState } from 'react';
import { HomeForm} from '../../components';
import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import {sendUserName} from "../../actions"


function HomePage (){
    const [ UserName, setUserName ] = useState("")
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    let button = 0;

    const Create = () => {
        button = 1;
    }

    const Join = () => {
        button = 2;
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(sendUserName(UserName));
        if(button == 1){
            navigateTo('/Create');
        }else if(button == 2){
            navigateTo('/Join');
        }
    }

    const updateInput = e => {
        const input = e.target.value;
        setUserName(input);
    }
    return(
        <>
        <h3>Squiz App</h3>
            <div id="nameForm">
            <HomeForm handleSubmit={handleSubmit} updateInput={updateInput} Create={Create} Join={Join}/>
        </div>
        </>
    )
}

export default HomePage;
