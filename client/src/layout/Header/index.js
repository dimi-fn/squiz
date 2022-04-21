import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


const Header = () => {
    const navigate = useNavigate();
    return (
        
        <header>
            <h1 id="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>SQUIZ <img id="image" src="https://cdn3.iconfinder.com/data/icons/diving-fill/64/Food-seafood-squid-sea-512.png"></img></h1>
            
        </header>
        
    )
};


export default Header;

