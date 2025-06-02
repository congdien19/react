import React, { useState } from 'react';
import './Menu.css';

function Menu({ onMenuClick }) {
  const [activeItem, setActiveItem] = useState('Home');
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { label: 'Trang chủ', value: 'Home' },
    { label: 'Nón', value: 'Hat' },
    { label: 'Áo', value: 'Shirt' },
    { label: 'Giới thiệu', value: 'Introduce' },
    { label: 'Liên hệ', value: 'Contact' }
  ];

  const handleClick = (page) => {
    setActiveItem(page);
    onMenuClick(page);
  };

  return (
    <nav className="menu">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.value}
            className={`${activeItem === item.value ? 'active' : ''} ${hoveredItem === item.value ? 'hovered' : ''}`}
            onClick={() => handleClick(item.value)}
            onMouseEnter={() => setHoveredItem(item.value)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
