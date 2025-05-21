import React from 'react';
import './bosuutap.css';

const clubs = [
  { name: 'Manchester United', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
  { name: 'Chelsea', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' },
  { name: 'PSG', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg' },
  { name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
  { name: 'Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
  { name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
  
  { name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' },
  { name: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' },
  { name: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg' },
  
  { name: 'Dortmund', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg' },
  { name: 'Ajax', logo: 'https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg' },
];

const BoSuuTap = () => {
  return (
    <div className="clb-container">
      <div className="clb-header">
        <h2>CÂU LẠC BỘ BÓNG ĐÁ NỔI TIẾNG</h2>
 
      </div>
      <div className="clb-logos">
        {clubs.map((club, index) => (
          <div key={index} className="clb-item">
            <img src={club.logo} alt={club.name} title={club.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoSuuTap;
