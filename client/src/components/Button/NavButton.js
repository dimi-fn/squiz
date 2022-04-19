import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavButton = ({path,value}) => {
  const navigateTo = useNavigate();

  return <button id="button" onClick={() => navigateTo(path)} style={{ cursor: 'pointer' }}>{value}</button>
}

export default NavButton;
