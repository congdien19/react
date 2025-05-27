// src/components/Hero/Hero.js
import React from 'react';
import './Homeherro.css';

const Homeherro = () => {
  return (
    <section className="hero-section">
      <img src="/images/1.jpg" alt="Hero" className="hero-image" />
      <div className="hero-overlay">
        <h1 className="hero-title">Thể Thao Năng Động</h1>
        <p className="hero-description">
          Khám phá bộ sưu tập đồ thể thao thời thượng, trẻ trung và đầy cảm hứng tại <strong>SportBook</strong>.
          Chúng tôi cam kết mang đến phong cách năng động, chất lượng vượt trội và xu hướng thể thao mới nhất dành cho bạn.
        </p>
        <button className="hero-button">Xem Sản Phẩm</button>
      </div>
    </section>
  );
};

export default Homeherro;
