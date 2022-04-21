import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


const Header = () => {
    const navigate = useNavigate();
    return (
        
        <header>
            <h1 onClick={() => navigate('/')}>SQUIZ</h1>
        </header>
        
    )
};


export default Header;

