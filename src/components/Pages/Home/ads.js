// src/components/ads.js
import React from 'react';
import './ads.css';

const products = [
  {
    id: 1,
    name: "Giày Reebok Chính Hãng – SOLEFURY – White/Yellow | JapanSport – DV6923",
    price: "980.000 ₫",
    rating: 5,
    img: "/images/giay/giay11.jpg",
  },
  {
    id: 2,
    name: "Reebok Chính Hãng – SOLEFURY – Whitw/Blue | JapanSport – DV4481",
    price: "980.000 ₫",
    rating: 5,
    img: "/images/giay/giay12.jpg",
  },
  {
    id: 3,
    name: "Giày Thể Thao Reebok Chính Hãng – Solefury – White/Green | JapanSport",
    price: "1.280.000 ₫",
    rating: 5,
    img: "/images/giay/giay13.jpg",
  },
  {
    id: 4,
    name: "Giày Adidas Chính hãng – Ultraboost 21 – Trắng | JapanSport FZ2929",
    price: "2.400.000 ₫",
    rating: 5,
    img: "/images/giay/giay14.jpg",
  },
  {
    id: 5,
    name: "Giày Adidas Chính Hãng – ULTRA BOOST 4.0 – Đỏ / Trắng | JapanSport",
    price: "1.980.000 ₫",
    rating: 5,
    img: "/images/giay/giay15.jpg",
  },
  {
    id: 6,
    name: "Adidas Chính Hãng – Ultraboost – White/Black | JapanSport – DB3197",
    price: "2.350.000 ₫",
    rating: 5,
    img: "/images/giay/giay16.jpg",
  },
  {
    id: 7,
    name: "Giày Adidas Chính Hãng – ULTRABOOST PB – Black | JapanSport",
    price: "2.100.000 ₫",
    rating: 5,
    img: "/images/giay/giay10.jpg",
  },
  {
    id: 8,
    name: "Giày Reebok Chính Hãng – DMX SERIES 2K – White | JapanSport –",
    price: "980.000 ₫",
    rating: 5,
    img: "/images/giay/giay11.jpg",
  },
];

export default function Ads() {
  return (
    <div className="ads-container">
      <h2>GIÀY ADDIAS</h2>
      <div className="ads-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <div className="stars">{"★".repeat(product.rating)}</div>
            <div className="price">{product.price}</div>
          </div>
        ))}
      </div>
      <button className="more-button">XEM THÊM SẢN PHẨM</button>
    </div>
  );
}
