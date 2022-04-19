import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NameForm, NavButton} from '../components';
//import NavButton from '../components';



const HomePage = () => (
    <>
    <h3>Squiz App</h3>
    <div id="nameForm">
        <NameForm/>
    </div>

    <div id="HomeButton">
        <NavButton path="/Create" value="Create Room"/>
        <NavButton path="/Join" value="Join Room"/>
    </div>

    </>
)

export default HomePage;
