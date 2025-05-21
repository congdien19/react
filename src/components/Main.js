import React from 'react';
import Home from './Main/Home';
import Introduce from './Main/Introduce';
import Hat from './Main/Hat';
import Shirt from './Main/Shirt';
import Contact from './Main/Contact';

function Main({ currentPage }) {
  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Introduce':
        return <Introduce />; 
      case 'Hat':
        return <Hat />;
      case 'Shirt':
        return <Shirt />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="main">
      {renderContent()}
    </main>
  );
}

export default Main;