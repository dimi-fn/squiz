import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const NavButton = ({path,value}) => {
  const navigateTo = useNavigate();

  return <button id="NavButton" onClick={() => navigateTo(path)} style={{ cursor: 'pointer' }}>{value}</button>
}

export default NavButton;
