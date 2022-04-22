import React from 'react';
import {NavButton} from '../../components/';
import { useSelector } from 'react-redux';
import './style.css'

const EndGame = () => {
    const UserName = useSelector(state => state.result[0].UserName);
    const Score = useSelector(state => state.result[0].Score);
    return <div className='endContainer'>

    <h1 className='game-over'>Game Over</h1>
    <h4 className='game-result'>Quiz score</h4>
    <p className="end-game-result">User: {UserName}</p>
    <br></br>
    <p className="end-game-result" >Score: {Score}</p>
    <NavButton className="game-over-btn" path="/" value= "Leave game"/>
    <NavButton path="/Create" value= "Play Again"/>
    </div>
}

export default EndGame;
