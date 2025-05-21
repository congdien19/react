import React from 'react';
import './SocialIcons.css';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="#" className="icon">
        <img src="images/twitter.png" alt="Twitter" />
      </a>
      <a href="#" className="icon">
        <img src="images/facebook.png" alt="Facebook" />
      </a>
      <a href="#" className="icon">
        <img src="images/instagram.png" alt="Instagram" />
      </a>
      <a href="#" className="icon">
        <img src="images/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  );
}

export default SocialIcons;