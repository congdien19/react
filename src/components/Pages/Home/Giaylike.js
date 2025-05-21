import React from 'react';
import './Giaylike.css';

const products = [
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
];

const GiayLike = () => {
  return (
    <div className="giay-container">
      <h3>GỢI Ý CHO BẠN</h3>
      <h2>CÁC SẢN PHẨM ĐƯỢC YÊU THÍCH</h2>
      <div className="tabs">
        <span className="active-tab">GỢI Ý</span>
        <span>PHỔ BIẾN</span>
      </div>
      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            {item.sale && <span className="sale-badge">SALE</span>}
            <img src={item.img} alt={item.name} />
            <p className="product-name">{item.name}</p>
            <div className="stars">{'★'.repeat(item.rating)}</div>
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

export default GiayLike;
