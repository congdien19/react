import React from 'react';
import './khachhang.css';

const testimonials = [
  {
    id: 1,
    image: '/images/avatar.jpg',
    content: 'Giày bên shop có nhiều mẫu đẹp lắm, nhưng mà mình ưu mới vẫn cả mẫu thôi, vừa mới mua bên shop, giày vừa, đẹp, sau ra mua ủng hộ shop tiếp',
    name: 'Đức Nguyễn',
    position: 'Nhân viên ngân hàng'
  },
  {
    id: 2,
    image: '/images/avatar.jpg',
    content: 'Giày bên shop có nhiều mẫu đẹp lắm, nhưng mà mình ưu mới vẫn cả mẫu thôi, vừa mới mua bên shop, giày vừa, đẹp, sau ra mua ủng hộ shop tiếp',
    name: 'Đức Nguyễn',
    position: 'Nhân viên ngân hàng'
  },
  {
    id: 3,
    image: '/images/avatar.jpg',
    content: 'Giày bên shop có nhiều mẫu đẹp lắm, nhưng mà mình ưu mới vẫn cả mẫu thôi, vừa mới mua bên shop, giày vừa, đẹp, sau ra mua ủng hộ shop tiếp',
    name: 'Đức Nguyễn',
    position: 'Nhân viên ngân hàng'
  }
];

const KhachHang = () => {
  return (
    <div className="testimonials-container">
      <h2>KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="avatar" />
            <div className="stars">{'★'.repeat(5)}</div>
            <p className="content">{testimonial.content}</p>
            <div className="author">
              <strong>{testimonial.name}</strong>
              <span className="position">/ {testimonial.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KhachHang;