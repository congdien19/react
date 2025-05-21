// src/components/GiayTheThao/GiayTheThao.js
import React from 'react';
import './Giaythethao.css';

const products = [
  {
    img: '/images/giay/giay1.jpg',
    name: 'Giày Reebok Chính Hãng – SOLEFURY - White/Yellow',
    price: '980.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    img: '/images/giay/giay2.jpg',
    name: 'Giày Thể Thao Reebok Chính Hãng – Solefury',
    price: '1.280.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    img: '/images/giay/giay3.jpg',
    name: 'Adidas Chính Hãng – Ultraboost – White/Black',
    price: '2.350.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    img: '/images/giay/giay4.jpg',
    name: 'Giày Adidas Chính Hãng – StanSmith – Trắng',
    price: '1.480.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    img: '/images/giay/giay5.jpg',
    name: 'Giày Reebok Chính Hãng – DMX Series 2K – White/Grey',
    price: '690.000 ₫',
    oldPrice: '1.100.000 ₫',
    rating: 5,
    sale: true,
  },
  {
    img: '/images/giay/giay6.jpg',
    name: 'Giày chạy Nike Chính Hãng – Air Zoom Pegasus 38',
    price: '2.450.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    img: '/images/giay/giay7.jpg',
    name: 'Giày Adidas Chính Hãng – ULTRA BOOST 4.0 – Đỏ /',
    price: '1.980.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    img: '/images/giay/giay8.jpg',
    name: 'Adidas Fashion Sneaker – Giày thời trang',
    price: '750.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    img: '/images/giay/giay9.jpg',
    name: 'Giày Reebok Chính hãng – Agilityflex – Hồng /',
    price: '950.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  {
    img: '/images/giay/giay10.jpg',
    name: 'Reebok Chính Hãng – SOLEFURY – White/Blue /',
    price: '980.000 ₫',
    oldPrice: null,
    rating: 5,
    sale: false,
  },
  
  // Add more products if needed
];

const GiayTheThao = () => {
  return (
    <div className="giay-container">
      <h3>SHOP GIÀY NAM</h3>
      <h2>GIÀY THỂ THAO</h2>
      <div className="tabs">
        <span className="active-tab">HOT VÀ MỚI</span>
        <span>SALES</span>
      </div>
      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            {item.sale && <span className="sale-badge">SALE</span>}
            <img src={item.img} alt={item.name} />
            <p className="product-name">{item.name}</p>
            <div className="stars">
              {'★'.repeat(item.rating)}
            </div>
            <div className="price">
              {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}
              <span className="new-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiayTheThao;
