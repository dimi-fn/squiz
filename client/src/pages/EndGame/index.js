import React from 'react';
import {NavButton} from '../../components/';
import { useSelector } from 'react-redux';
import './style.css'

const EndGame = () => {
    const UserName = useSelector(state => state.result[0].UserName);
    const Score = useSelector(state => state.result[0].Score);
    return <>
    <h1>Game Finished:</h1>
    <p>User:{UserName}</p>
    <br></br>
    <p>Score:{Score}</p>
    <NavButton path="/" value= "Leave game"/>
    <NavButton path="/Create" value= "Play Again"/>
    </>
}

export default EndGame;
