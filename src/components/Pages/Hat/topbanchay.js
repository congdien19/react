import React from "react";
import "./topbanchay.css";

const products = [
  {
    id: 1,
    name: "Mũ Lưỡi Trai Đen Trơn Classic Khóa Đồng Cao Cấp Cho Nam và Nữ",
    price: 145000,
    oldPrice: 250000,
    discount: 42,
    image: "/images/mu/cap1.jpg",
  },
  {
    id: 2,
    name: "Mũ Phớt Nam vành Nhỏ Classic Thắt Da Lịch Lãm",
    price: 165000,
    oldPrice: 220000,
    discount: 25,
    image: "/images/mu/hat2.jpg",
  },
  {
    id: 3,
    name: "Mũ Phớt Nam Nỉ Classic Cao Cấp Mã MP021",
    price: 145000,
    oldPrice: 200000,
    discount: 28,
    image: "/images/mu/hat2.jpg",
  },
  {
    id: 4,
    name: "Mũ Bucket Vành Tròn Nam, Nữ Phong Cách Hàn Quốc",
    price: 127000,
    oldPrice: 165000,
    discount: 23,
    image: "/images/mu/hat4.jpg",
  },
  {
    id: 5,
    name: "Nón Snapback Advisory Phong Cách HipHop Cá Tính",
    price: 115000,
    oldPrice: 170000,
    discount: 32,
    image: "/images/mu/hat5.jpg",
  },
  {
    id: 6,
    name: "Mũ Vành Nam Nữ, Nón Bucket Vải Cotton Cao Cấp Màu Đen, Trắng, Be",
    price: 139000,
    oldPrice: 185000,
    discount: 25,
    image: "/images/mu/hat6.jpg",
  },
  {
    id: 7,
    name: "Mũ Lưỡi Trai Hiphop Đẹp Cho Nam và Nữ",
    price: 165000,
    oldPrice: 250000,
    discount: 34,
    image: "/images/mu/mu4.jpg",
  },
  {
    id: 8,
    name: "Nón Bucket, Mũ Vành Tròn Nam Nữ 2 Mặt Trơn Classic Cao Cấp",
    price: 165000,
    oldPrice: 235000,
    discount: 30,
    image: "/images/mu/hat7.jpg",
  },
];

const TopBanChay = () => {
  return (
    <div className="topban-section">
      <h2 className="topban-title">TOP MŨ NÓN BÁN CHẠY</h2>
      <div className="topban-grid">
        {products.map((item) => (
          <div key={item.id} className="topban-card">
            <div className="topban-discount">-{item.discount}%</div>
            <img src={item.image} alt={item.name} className="topban-img" />
            <div className="topban-name">{item.name}</div>
            <div className="topban-price">
              <span className="old-price">{item.oldPrice.toLocaleString()} VNĐ</span>
              <span className="new-price">{item.price.toLocaleString()} VNĐ</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBanChay;
