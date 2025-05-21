import React, { useState } from 'react';
import './Menu.css';

function Menu({ onMenuClick }) {
  const [activeItem, setActiveItem] = useState('Home'); // Mặc định là Home
  const [hoveredItem, setHoveredItem] = useState(null); // Trạng thái cho mục đang hover

  const handleClick = (page) => {
    setActiveItem(page);
    onMenuClick(page);
  };

  return (
    <nav className="menu">
      <ul>
        {['Home', 'Hat', 'Shirt','Introduce','Contact'].map((item) => (
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