import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <Header onMenuClick={handleMenuClick} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App; // Đảm bảo có dòng này