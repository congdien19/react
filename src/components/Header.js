import React from 'react';
import './Header.css';
import Logo from './Header/Logo';
import Menu from './Header/Menu';
import SocialIcons from './Header/SocialIcons';
function Header({ onMenuClick }) {
  return (
    <header className="header">
      <Logo />
      <Menu onMenuClick={onMenuClick} />
      <SocialIcons />
    </header>
  );
}

export default Header;