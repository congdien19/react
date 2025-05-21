import React, { useState } from 'react';
import './Menu.css';

function Menu({ onMenuClick }) {
  const [activeItem, setActiveItem] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (page) => {
    setActiveItem(page);
    onMenuClick(page);
    setIsMobileMenuOpen(false); // Ẩn menu sau khi chọn trên mobile
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="menu">
      <div className="menu-toggle" onClick={toggleMobileMenu}>☰</div>
      <ul className={isMobileMenuOpen ? 'open' : ''}>
        {['Home', 'Hat', 'Shirt', 'Introduce', 'Contact'].map((item) => (
          <li
            key={item}
            className={`${activeItem === item ? 'active' : ''} ${hoveredItem === item ? 'hovered' : ''}`}
            onClick={() => handleClick(item)}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
